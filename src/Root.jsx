import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "views/dashboard/tools/Footer";
import Header from "views/dashboard/tools/Header";

function Root() {
  return (
    <Container>
      <Stack spacing={1} pt={3}>
        <Header />
        <Outlet />
        <Footer />
      </Stack>
    </Container>
  );
}

export default Root;
