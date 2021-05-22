import React from "react";

import Container from "react-bootstrap/Container";

import OrderEntry from "./pages/entry/OrderEntry";

import { OrderContextProvider } from "./context/OrderContext";

function App() {
  return (
    <Container>
      <OrderContextProvider>
        <OrderEntry />
      </OrderContextProvider>
    </Container>
  );
}

export default App;
