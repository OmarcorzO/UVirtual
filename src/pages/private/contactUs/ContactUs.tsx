import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

// IMPORTADOS
import "./contactUs.scss";
import Banner from "../../../components/banner/Banner";
import ImgBanner from "../../../assets/images/bannerContactUs.png";
import gifLogin from "../../../assets/images/video-login.gif";
import videoLogin from "../../../assets/videos/video-login-reduced.mp4";
import { useState } from "react";
import IconColombia from "../../../assets/icons/IconColombia";
import BannerVideo from "../../../components/bannerVideo/BannerVideo";

const ContactUs = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box>
      {/**********/}
      {/* BANNER */}
      {/**********/}
      {/* <BannerVideo linkVideo={videoLogin}/> */}
      <Banner
        urlImage={gifLogin}
        title="Contáctanos"
        description=""
      />

      {/********/}
      {/* MAIN */}
      {/********/}
      <Box className="mainContent">
        {/****************************/}
        {/* CONTENIDO DE CONTACTANOS */}
        {/****************************/}
        <Box className="containerContactUs">
          <Typography component={"h1"} className="title size60">
            Comunicate con UVirtual
          </Typography>

          <br />

          <Typography>
            Si desea información adicional sobre el sitio o alguno de nuestros
            servicios, por favor, complete el siguiente formulario y nos
            pondremos en contacto con usted en breve.
          </Typography>

          <br />

          <Typography>
            Los datos marcados con asterisco (*) son obligatorios. Toda su
            información será tratada de manera confidencial.
          </Typography>

          <Box className="formContactUs">
            {/*******************/}
            {/* NOMBRE COMPLETO */}
            {/*******************/}
            <OutlinedInput
              className="inputWhite"
              placeholder="Nombre completo"
              endAdornment={<InputAdornment position="end">*</InputAdornment>}
            />

            {/**********************/}
            {/* CORREO ELECTRONICO */}
            {/**********************/}
            <OutlinedInput
              className="inputWhite"
              placeholder="Correo electrónico"
              endAdornment={<InputAdornment position="end">*</InputAdornment>}
            />

            {/***********/}
            {/* CELULAR */}
            {/***********/}
            <Box className="contentCel" display={"flex"} gap={"20px"}>
              {/******************/}
              {/* SELECT PREFIJO */}
              {/******************/}
              <FormControl className="selectWhite">
                <InputLabel id="demo-simple-select-label" className="size18">
                  <IconColombia />
                  +57
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={1} className="size18" sx={{ gap: "10px" }}>
                    <IconColombia />
                    +57
                  </MenuItem>
                </Select>
              </FormControl>

              {/*****************/}
              {/* INPUT CELULAR */}
              {/*****************/}
              <OutlinedInput
                className="inputWhite"
                placeholder="Celular"
                endAdornment={<InputAdornment position="end">*</InputAdornment>}
              />
            </Box>

            {/**********/}
            {/* RESEÑA */}
            {/**********/}
            <OutlinedInput
              className="inputWhite multiline"
              placeholder="Escribe tu consulta..."
              multiline
              maxRows={6}
              endAdornment={<InputAdornment position="end">*</InputAdornment>}
            />

            {/****************/}
            {/* BOTON ENVIAR */}
            {/****************/}
            <Button
              disableTouchRipple
              className="btnGradientOrangeSquare size20"
            >
              <Typography className="size20">Enviar</Typography>
            </Button>
          </Box>

          {/********/}
          {/* INFO */}
          {/********/}
          <Typography>
            Si los Usuarios desean contactar con UVirtual para cualquier duda o
            incidencia, pueden utilizar la siguiente dirección de correo
            electrónico rectoria@uvirtualad.mx o contactar a través del número
            de teléfono (+52) 55 7563 8192. Este servicio estará disponible de{" "}
            <br />
            <strong>
              Lunes a sábados de 9:00h a 18:00h
            </strong>
          </Typography>

          <br />

          <Typography>
            Desde UVirtual deseamos brindarle el mejor servicio, por lo que
            agradecemos sus comentarios y sugerencias que nos permitirán
            atenderle como usted se merece.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
