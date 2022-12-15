import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="MODEL-S"
        description="ORDER ONLINE FOR TOUCHLESS DELIVERY"
        backgroundimg="model-s.jpg"
        leftButton="CUSTOMER ORDER"
        rightButton="EXISTING INVENTORY"
      />
      <Section
        title="MODEL-Y"
        description="ORDER ONLINE FOR TOUCHLESS DELIVERY"
        backgroundimg="model-y.jpg"
        leftButton="CUSTOMER ORDER"
        rightButton="EXISTING INVENTORY"
      />
      <Section
        title="MODEL-3"
        description="ORDER ONLINE FOR TOUCHLESS DELIVERY"
        backgroundimg="model-3.jpg"
        leftButton="CUSTOMER ORDER"
        rightButton="EXISTING INVENTORY"
      />
      <Section
        title="MODEL-X"
        description="ORDER ONLINE FOR TOUCHLESS DELIVERY"
        backgroundimg="model-x.jpg"
        leftButton="CUSTOMER ORDER"
        rightButton="EXISTING INVENTORY"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundimg="solar-panel.jpg"
        leftButton="CUSTOMER ORDER"
        rightButton="EXISTING INVENTORY"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
        backgroundimg="solar-roof.jpg"
        leftButton="CUSTOMER ORDER"
        rightButton="EXISTING INVENTORY"
      />
      <Section
        title="Accessories"
        description=""
        backgroundimg="accessories.jpg"
        leftButton="CUSTOMER ORDER"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
