import { Box, Paper, Stack, styled, Typography } from "@mui/material";

// IMPORTADOS
import "./detailsProgram.scss";
import { infoProgram } from "../../../components/dataApi/DataApi";
import Banner from "../../../components/banner/Banner";
import ImgBanner from "../../../assets/images/bannerDetailsProgram.png";
import CustomerService from "../../../components/customerService/CustomerService";
import ContentProgram from "./components/contentProgram/ContentProgram";
import ImgBlue from "../../../assets/images/imgBlue.png";
import SliderCommit from "../../../components/sliderCommit/SliderCommit";

// ITEM DEL STACK DE INFORMACION
const Item = styled(Paper)(() => ({
  backgroundColor: "transparent",
  fontSize: "clamp(18px, 2dvw, 32px) !important",
  boxShadow: "none",
  color: "#fff",
  height: "fit-content",
  textAlign: "center",
  marginLeft: "0px !important",

  ">.title, >.description": {
    color: "var(--colorBlueDark)",
    lineHeight: "170%",
    textWrap: "nowrap",
  },
  ">.description": {
    fontWeight: 600,
  },
}));

const DetailsProgram = () => {
  return (
    <Box>
      {/**********/}
      {/* BANNER */}
      {/**********/}
      <Banner
        urlImage={ImgBanner}
        title="Doctorado en Pedagogía y Educación"
        description="Aprende a identificar, orientar y desarrollar investigaciones que contribuyan al mejoramiento de la educación."
      />

      {/********/}
      {/* MAIN */}
      {/********/}
      <Box className="mainContent">
        {/*****************/}
        {/* INFO PROGRAMA */}
        {/*****************/}
        <Box className="infoProgram">
          <Stack
            className="stackInfoProgram"
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4, xl: 7 }}
          >
            {infoProgram.map((item, index) => (
              <Item key={index}>
                <Typography component={"h1"} className="title size18">
                  {item.title}
                </Typography>

                <Typography className="description size18">
                  {item.description}
                </Typography>
              </Item>
            ))}
          </Stack>

          {/******************/}
          {/* INFO DE PRECIO */}
          {/******************/}
          <Box className="infoPrice">
            <Typography className="size20">PRECIO DEL SEMESTRE</Typography>
            <Typography className="size40">$15,999.000</Typography>
          </Box>
        </Box>

        {/**********************/}
        {/* CONTENIDO PROGRAMA */}
        {/**********************/}
        <ContentProgram />

        {/*******************/}
        {/* SLIDER COMPLETO */}
        {/*******************/}
        <SliderCommit />

        {/**************/}
        {/* CARTA AZUL */}
        {/**************/}
        <Box className="cardBlue">
          <Typography className="opinionBlue size25">
            “Las necesidades educativas especiales requieren nuevos modos de
            identificar y abordar las dificultades de aprendizaje y los
            trastornos del desarrollo. En este sentido, la neuroeducación ofrece
            un nuevo paradigma desde el que dar respuesta a esta necesidad”.
          </Typography>

          <Box
            className="imgProfileBlue"
            sx={{ background: `url(${ImgBlue})` }}
          />

          <Typography className="nameBlue size25">
            Dra. Estrella Almarales Higgins
          </Typography>
          <br />
          <Typography className="titleBlue size20">
            Directora del Doctorado en Pedagogía y Educación
          </Typography>
        </Box>

        {/************************/}
        {/* SERVICIO DE ATENCIÓN */}
        {/************************/}
        <CustomerService />
      </Box>
    </Box>
  );
};

export default DetailsProgram;
