import { Fragment, useState } from "react";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// IMPORTADOS
import "./header.scss";
import LogoBlanco from "../../assets/icons/LogoBlanco";
import IconBurguer from "../../assets/icons/IconBurguer";
import IconArrowLeft from "../../assets/icons/IconArrowLeft";
import IconArrowUpRight from "../../assets/icons/IconArrowUpRight";
import DrawerContent from "./drawerContent/DrawerContent";
import IconFacebook from "../../assets/icons/IconFacebook";
import IconTwitter from "../../assets/icons/IconTwitter";
import IconInstagram from "../../assets/icons/IconInstagram";
import IconYoutube from "../../assets/icons/IconYoutube";
import IconWhatsapp from "../../assets/icons/IconWhatsapp";

type Anchor = "top";

const Header = () => {
  const ubi = useLocation()
  const navigate = useNavigate();
  const [stateDrawer, setStateDrawer] = useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setStateDrawer({ ...stateDrawer, [anchor]: open });
    };

  // CONTENIDO DRAWER
  const list = (anchor: Anchor) => (
    <Box
      className="containerDrawer"
      sx={{ width: anchor === "top" ? "auto" : 250 }}
      role="presentation"
    >
      {/*****************/}
      {/* DRAWER HEADER */}
      {/*****************/}
      <Box className="drawerHeader">
        {/***************/}
        {/* BUTTON BACK */}
        {/***************/}
        <Button
          className="btnBack"
          disableTouchRipple
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <IconArrowLeft />
          <Typography className="size18">Regresar</Typography>
        </Button>

        <Box>
          <Button disableTouchRipple className="btnGradientBorderOrangeCircle" onClick={() => navigate("/login")}>
            <Typography className="size16">Acceso al campus</Typography>
          </Button>

          <Button
            disableTouchRipple
            className="btnGradientOrangeCircle"
            onClick={() => navigate("/sign-up")}
          >
            <Typography className="size16">Registrarse</Typography>
          </Button>
        </Box>
      </Box>

      {/******************/}
      {/* DRAWER CONTENT */}
      {/******************/}
      <DrawerContent />

      {/*****************/}
      {/* DRAWER FOOTER */}
      {/*****************/}
      <Box className="drawerFooter">
        <Button disableTouchRipple className="btnWhatsapp">
          <Typography className="size18">Contactar un asesor</Typography>
          <IconWhatsapp />
        </Button>

        <Box>
          <Typography component={"span"} className="size14">
            2024 UVirtual ©.
          </Typography>

          <IconButton disableTouchRipple>
            <IconFacebook />
          </IconButton>

          <IconButton disableTouchRipple>
            <IconTwitter />
          </IconButton>

          <IconButton disableTouchRipple>
            <IconInstagram />
          </IconButton>

          <IconButton disableTouchRipple>
            <IconYoutube />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box className="containerHeader" sx={{ backgroundColor: ubi.pathname === "/details-program" ? "var(--colorBeige)" : "transparent",  padding: ubi.pathname === "/details-program" ? "50px" : "100px"}}>
      {/********/}
      {/* LOGO */}
      {/********/}
      <IconButton
        disableTouchRipple
        // sx={{ padding: "0px" }}
        className="btnIcon"
        onClick={() => navigate("/home")}
      >
        <LogoBlanco />
      </IconButton>

      {/******************************/}
      {/* DRAWER / BOTON HAMBURGUESA */}
      {/******************************/}
      <Box className="contentNav">
        {/* <Box className="nav">
          <Typography component={"a"} className="size18" href="/about-us">
            Sobre UVirtual
          </Typography>
          <Typography component={"a"} className="size18" href="details-course">
            Micro certificación
          </Typography>
          <Typography component={"a"} className="size18" href="#">
            Oferta académica
          </Typography>
          <Typography component={"a"} className="size18" href="#">
            Business
          </Typography>
          <Typography component={"a"} className="size18" href="#">
            Servicios
          </Typography>
          <Typography component={"a"} className="size18" href="contact-us">
            Contacta
          </Typography>
        </Box> */}

        <Box>
          
          {(["top"] as const).map((anchor) => (
            <Fragment key={anchor}>
              
              {/*********************/}
              {/* BOTON HAMBURGUESA */}
              {/*********************/}
              {/* btnGradientBorderOrangeCircle (Posible clase para el button verificar)*/}
              <Button
                className="btnBurguer"
                disableRipple
                onClick={toggleDrawer(anchor, true)}
              >
                <Typography component={"p"} className="size18" color="var(--colorOrangeDark) !important">
                Menú
              </Typography>
                <IconBurguer color="var(--colorOrangeDark)"/>
              </Button>

              {/**********/}
              {/* DRAWER */}
              {/**********/}
              <Drawer
                anchor={anchor}
                open={stateDrawer[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </Fragment>
          ))}
        </Box>

        {/*********/}
        {/* BOTON */}
        {/*********/}
        <Button
          disableTouchRipple
          className="btnInfo btnGradientOrangeCircle "
          href="contact-us"
          sx={{ textTransform: "uppercase" }}
        >
          <Typography className="size16">Solicitar Información</Typography>
          <IconArrowUpRight />
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
