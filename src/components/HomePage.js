import React from "react";

import NavBar from "./Navigation";
import HeaderSection from "./Header";
import StatusSection from "./StatusSection";
import TableSection from "./Table";

import { Container } from "../assets/styles/styles";

export default function HomeScreen() {
 
  return (
    <>
      <NavBar />
      <HeaderSection />
      <Container>
        <StatusSection />
        <TableSection />
      </Container>
    </>
  );
}
