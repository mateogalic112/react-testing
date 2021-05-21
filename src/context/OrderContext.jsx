import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

import { pricePerItem } from "../constants";

const OrderContext = createContext();

export const useOrderContext = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("Not inside order context");
  }

  return context;
};

export const OrderProvider = (props) => {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const [totals, setTotals] = useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  });

  const calculateSubtotal = (optionType, optionCounts) => {
    let optionCount = 0;
    for (const count of optionCounts[optionType].values()) {
      optionCount += count;
    }

    return optionCount * pricePerItem[optionType];
  };

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal("scoops", optionCounts);
    const toppingsSubtotal = calculateSubtotal("toppings", optionCounts);
    const grandTotal = scoopsSubtotal + toppingsSubtotal;
    setTotals({
      scoops: scoopsSubtotal,
      toppings: toppingsSubtotal,
      grandTotal,
    });
  }, [optionCounts]);

  const value = useMemo(() => {
    const updateItemCount = (itemName, newItemCount, optionType) => {
      const newOptionCounts = { ...optionCounts };

      const optionCountsMap = optionCounts[optionType];
      optionCountsMap.set(itemName, parseInt(newItemCount));

      setOptionCounts(newOptionCounts);
    };

    return [{ ...optionCounts, totals }, updateItemCount];
  }, [optionCounts, totals]);

  <OrderContext.Provider value={value}>{props.children}</OrderContext.Provider>;
};
