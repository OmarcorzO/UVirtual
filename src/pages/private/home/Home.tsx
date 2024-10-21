import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// IMPORTADOS
import "./home.scss";
import Banner from "../../../components/banner/Banner";
import ImgBanner from "../../../assets/images/bannerHome.png";
import IconArrowUpRight from "../../../assets/icons/IconArrowUpRight";
import {
  imgSliderProgram,
  imgSliderDoctorate,
  selectArea,
  selectTipo,
  imgSliderMastery,
} from "../../../components/dataApi/DataApi";
import Microcertifications from "./components/microcertifications/Microcertifications";
import ReasonToStudy from "./components/reasonToStudy/ReasonToStudy";
import CustomerService from "../../../components/customerService/CustomerService";
import SliderCommit from "../../../components/sliderCommit/SliderCommit";
import SliderHover from "../../../components/sliderHover/SliderHover";
import ImgScroll from "../../../components/imgScroll/ImgScroll";
// import data from "./data.json";

const Home = () => {
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box>
      {/**********/}
      {/* BANNER */}
      {/**********/}
      <Banner
        urlImage={ImgBanner}
        title="UVirtual, amplía tus posibilidades de estudiar una carrera
          profesional."
        description="Comienza, transforma e impulsa tu carrera profesional con más de 5400
          cursos, títulos de pregrado y posgrado en cualquier lugar del mundo."
        complement={
          <Button
            disableTouchRipple
            className="btnInfo btnGradientOrangeCircle size16"
            href="sign-up"
          >
            Inscribete Ahora <IconArrowUpRight />
          </Button>
        }
      />

      {/********/}
      {/* MAIN */}
      {/********/}
      <Box className="mainContent">
        {/********************/}
        {/* OFERTA ACADEMICA */}
        {/********************/}
        <Box className="containerOfferAcademy">
          <Typography component={"h3"} className="size16">
            OFERTA ACADÉMICA
          </Typography>
          <Typography component={"h1"} className="size60">
            Descubre todo lo que UVirtual te puede ofrecer.
          </Typography>

          {/************************/}
          {/* CONTENEDOR DE FILTRO */}
          {/************************/}
          <Box className="containerFilter">
            {/*******************/}
            {/* TIPO DE ESTUDIO */}
            {/*******************/}
            <FormControl className="selectWhite">
              <InputLabel id="demo-simple-select-label" className="size18">
                Tipo de estudio
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                {selectArea.map((item, index) => (
                  <MenuItem key={index} value={item.value} className="size18">
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/************************/}
            {/* AREA DE CONOCIMIENTO */}
            {/************************/}
            {/* <FormControl className="selectWhite">
                <InputLabel id="demo-simple-select-label" className="size18">
                  Área de conocimiento
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  {selectTipo.map((item, index) => (
                    <MenuItem key={index} value={item.value} className="size18">
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}

            <Button
              disableTouchRipple
              className="btnSearch btnGradientOrangeSquare size20"
            >
              <Typography className="size20">Buscar</Typography>
            </Button>
          </Box>
        </Box>

        {/************************/}
        {/* MICROCERTIFICACIONES */}
        {/************************/}
        <Microcertifications />

        {/*******************/}
        {/* SLIDER CARRERAS */}
        {/*******************/}
        <Box className="containerSlider">
          {/*************/}
          {/* PRETITULO */}
          {/*************/}
          <Typography className="pretitle size16">
            Carreras Profesionales
          </Typography>

          {/**********/}
          {/* TITULO */}
          {/**********/}
          <Typography className="title size60">
            Empieza a estudiar tu pregrado ahora.
          </Typography>

          {/***************/}
          {/* DESCRIPTION */}
          {/***************/}
          <Typography className="description size18">
            Una carrera profesional es el comienzo de un viaje donde el aprendizaje continuo y la pasión por crecer se convierten en las claves del éxito y la realización personal.
          </Typography>

          {/**********/}
          {/* SLIDER */}
          {/**********/}
          <Box className="contentSlider">
            <ImgScroll images={imgSliderProgram}/>
            {/* <SliderHover items={imgSliderProgram} /> */}

            <br />
            {/*********/}
            {/* BOTON */}
            {/*********/}
            <Button
              disableTouchRipple
              className="btnInfo btnGradientOrangeCircle size16"
              onClick={() => navigate("/undergraduate")}
            >
              EXPLORAR CARRERAS <IconArrowUpRight />
            </Button>
          </Box>
        </Box>

        {/*********************/}
        {/* SLIDER DOCTORADOS */}
        {/*********************/}
        <Box className="containerSlider">
          {/*************/}
          {/* PRETITULO */}
          {/*************/}
          <Typography className="pretitle size16">Doctorados</Typography>

          {/**********/}
          {/* TITULO */}
          {/**********/}
          <Typography className="title size60">
            Amplia tu conocimiento con nosotros
          </Typography>

          {/***************/}
          {/* DESCRIPTION */}
          {/***************/}
          <Typography className="description size18">
            El Doctorado es la culminación de un esfuerzo incanzable por expandir los límites del conocimiento, donde la pasión por aprender se transforma en contribución a la sociedad.
          </Typography>

          {/**********/}
          {/* SLIDER */}
          {/**********/}
          <Box className="contentSlider">
            <ImgScroll images={imgSliderDoctorate} show={2}/>
            {/* <SliderHover items={imgSliderDoctorate} /> */}

            <br />
            {/*********/}
            {/* BOTON */}
            {/*********/}
            <Button
              disableTouchRipple
              className="btnInfo btnGradientOrangeCircle size16"
              href="doctorate"
              // onClick={() => navigate("/doctorate")}
            >
              EXPLORAR DOCTORADOS <IconArrowUpRight />
            </Button>
          </Box>
        </Box>

        {/*********************/}
        {/* SLIDER MAESTRIAS */}
        {/*********************/}
        <Box className="containerSlider">
          {/*************/}
          {/* PRETITULO */}
          {/*************/}
          <Typography className="pretitle size16">Maestrias</Typography>

          {/**********/}
          {/* TITULO */}
          {/**********/}
          <Typography className="title size60">
            Formaliza tu aprendizaje de forma ágil y activa
          </Typography>

          {/***************/}
          {/* DESCRIPTION */}
          {/***************/}
          <Typography className="description size18">
            La Maestría es el cambio hacia la especialización, donde el conocimiento se profundiza y las habilidades se perfeccionan para enfrentar los desafíos con mayor confianza y experticia
          </Typography>

          {/**********/}
          {/* SLIDER */}
          {/**********/}
          <Box className="contentSlider">
            <SliderHover items={imgSliderMastery} />

            <br />
            {/*********/}
            {/* BOTON */}
            {/*********/}
            <Button
              disableTouchRipple
              className="btnInfo btnGradientOrangeCircle size16"
              onClick={() => navigate("/mastery")}
            >
              EXPLORAR MAESTRIAS <IconArrowUpRight />
            </Button>
          </Box>
        </Box>

        {/*************************/}
        {/* RAZONES PARA ESTUDIAR */}
        {/*************************/}
        <ReasonToStudy />

        {/*******************/}
        {/* SLIDER COMPLETO */}
        {/*******************/}
        <SliderCommit />

        {/************************/}
        {/* SERVICIO DE ATENCIÓN */}
        {/************************/}
        <CustomerService />
      </Box>
    </Box>
  );
};

export default Home;
