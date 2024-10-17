import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

// IMPORTADOS
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {
  BtnFloatChatbot,
  BtnFloatArrow,
  BtnShare,
} from "../components/btnFloat/BtnFloat";

const Layout = () => {
  return (
    <Box sx={{ position: "relative" }}>
      {/**********/}
      {/* HEADER */}
      {/**********/}
      <Header />

      {/**********/}
      {/* OUTLET */}
      {/**********/}
      <Outlet />

      {/******************/}
      {/* BOTON FLOTANTE */}
      {/******************/}
      <BtnFloatChatbot />
      <BtnFloatArrow />
      <BtnShare />

      {/**********/}
      {/* FOOTER */}
      {/**********/}
      <Footer />
    </Box>
  );
};

export default Layout;
