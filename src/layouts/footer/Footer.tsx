import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  OutlinedInput,
  Typography,
} from "@mui/material";

// IMPORTADOS
import "./footer.scss";
import LogoBlanco from "../../assets/icons/LogoBlanco";
import IconFacebook from "../../assets/icons/IconFacebook";
import IconTwitter from "../../assets/icons/IconTwitter";
import IconInstagram from "../../assets/icons/IconInstagram";
import IconYoutube from "../../assets/icons/IconYoutube";
import IconNotification from "../../assets/icons/IconNotification";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box className="containerFooter">
      {/********/}
      {/* LOGO */}
      {/********/}
      <LogoBlanco />

      {/***********/}
      {/* DIVISOR */}
      {/***********/}
      <Divider />

      {/***************/}
      {/* INFORMACION */}
      {/***************/}
      <Grid container className="containerInfo">
        {/************/}
        {/* COMPAÑIA */}
        {/************/}
        <Grid item xs={12} sm={6} md={3} lg={2.05}>
          <Typography component={"h3"} className="size25">
            Compañia
          </Typography>

          <Button disableTouchRipple onClick={() =>  window.location.href = '/about-us'}>
            Sobre Nosotros
          </Button>
          {/* <Button disableTouchRipple onClick={() =>  window.location.href = '/home'}>
            Realizar test
          </Button> */}
          <Button disableTouchRipple onClick={() => navigate("/login")}>
            Acceso al campus
          </Button>
          {/* <Button disableTouchRipple onClick={() => navigate("/home")}>
            Business
          </Button> */}
        </Grid>

        {/************/}
        {/* ACADEMIA */}
        {/************/}
        <Grid item xs={12} sm={6} md={3} lg={2.05}>
          <Typography component={"h3"} className="size25">
            Academia
          </Typography>

          <Button
            disableTouchRipple
            onClick={() =>  window.location.href = '/courses'}
          >
            Microcertificaciones
          </Button>
          <Button disableTouchRipple onClick={() =>  window.location.href = '/undergraduate'}>
            Licenciaturas
          </Button>
          <Button
            disableTouchRipple
            onClick={() =>  window.location.href = '/mastery'}
          >
            Maestrías
          </Button>
          <Button disableTouchRipple onClick={() =>  window.location.href = '/doctorate'}>
            Doctorados
          </Button>
        </Grid>

        {/*************/}
        {/* COMUNIDAD */}
        {/*************/}
        <Grid item xs={12} sm={6} md={3} lg={2.05}>
          <Typography component={"h3"} className="size25">
            Comunidad
          </Typography>

          {/* <Button disableTouchRipple onClick={() => navigate("/home")}>
            Estudiantes
          </Button> */}
          {/* <Button disableTouchRipple onClick={() => navigate("/home")}>
            Egresados
          </Button> */}
          <Button disableTouchRipple onClick={() => navigate("/teaching-staff")}>
            Docentes
          </Button>
          {/* <Button disableTouchRipple onClick={() => navigate("/home")}>
            Blog
          </Button> */}
        </Grid>

        {/*********/}
        {/* AYUDA */}
        {/*********/}
        <Grid item xs={12} sm={6} md={3} lg={2.05}>
          <Typography component={"h3"} className="size25">
            Ayuda
          </Typography>

          {/* <Button disableTouchRipple onClick={() => navigate("/home")}>
            Centro de ayuda
          </Button> */}
          <Button disableTouchRipple onClick={() => navigate("/home")}>
            Políticas de privacidad
          </Button>
          {/* <Button disableTouchRipple onClick={() => navigate("/home")}>
            Políticas de cookies
          </Button> */}
          <Button disableTouchRipple onClick={() => navigate("/home")}>
            Términos y Condiciones
          </Button>
        </Grid>

        {/**************/}
        {/* SUSCRIBETE */}
        {/**************/}
        {/* <Grid item xs={12} md={12} lg={3.8}>
          <Typography component={"h3"} className="size25">
            Suscribete
          </Typography>

          <Box className="suscrib">
           
            <OutlinedInput placeholder="Usuario o correo electrónico" />

           
            <Button disableTouchRipple onClick={() => navigate("/home")}>
              Suscribirme <IconNotification />
            </Button>
          </Box>

          <Typography>
            Al hacerlo, aceptas nuestros términos de privacidad y uso de datos.
          </Typography>
        </Grid> */}
      </Grid>

      {/*********/}
      {/* LOGOS */}
      {/*********/}
      <Box className="footerNav">
        {/*************/}
        {/* COPYRIGHT */}
        {/*************/}
        <Typography className="size14">
          2024 UVirtual ©. Todos los derechos reservados.
        </Typography>

        {/**********/}
        {/* ICONOS */}
        {/**********/}
        <Box className="iconsFooter">
          {/************/}
          {/* FACEBOOK */}
          {/************/}
          <IconButton disableTouchRipple onClick={() => navigate("/#")}>
            <IconFacebook />
          </IconButton>

          {/***********/}
          {/* TWITTER */}
          {/***********/}
          <IconButton disableTouchRipple onClick={() => navigate("/#")}>
            <IconTwitter />
          </IconButton>

          {/*************/}
          {/* INSTAGRAM */}
          {/*************/}
          <IconButton disableTouchRipple onClick={() => navigate("/#")}>
            <IconInstagram />
          </IconButton>

          {/***********/}
          {/* YOUTUBE */}
          {/***********/}
          <IconButton disableTouchRipple onClick={() => navigate("/#")}>
            <IconYoutube />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
