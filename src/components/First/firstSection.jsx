import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Main from "./main";
import CanvasWrapper from "./Canvas";

const FirstSection = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <CanvasWrapper scrollY={scrollY} />
      <Container maxWidth="xl">
        <Main />
      </Container>
    </div>
  );
};

export default FirstSection;
