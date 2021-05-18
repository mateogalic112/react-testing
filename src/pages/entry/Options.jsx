import React, { useState, useEffect } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import { Row } from "react-bootstrap";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent key={item.name} {...item} />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
