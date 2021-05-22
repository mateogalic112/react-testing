import Options from "./Options";
import { useOrderContext } from "../../context/OrderContext";

export default function OrderEntry() {
  const [orderDetails] = useOrderContext();
  return (
    <div>
      <h1>Design your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
    </div>
  );
}
