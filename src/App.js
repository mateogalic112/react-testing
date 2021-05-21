import React from "react";

import Container from "react-bootstrap/Container";

import OrderEntry from "./pages/entry/OrderEntry";

import { OrderProvider } from "./context/OrderContext";

function App() {
  return (
    <Container>
      <OrderProvider>
        <OrderEntry />
      </OrderProvider>
    </Container>
  );
}

export default App;
