import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";

// IMPORTADOS
import "./undergraduate.scss";
import { pensumCourses } from "../../../components/dataApi/DataApi";
import Banner from "../../../components/banner/Banner";
// import ImgBanner from "../../../assets/images/bannerUndergraduate.png";
import ImgBanner from "../../../assets/images/imagen-microcerti.gif";
import CustomerService from "../../../components/customerService/CustomerService";
import IconSearch from "../../../assets/icons/IconSearch";
import CardPensum from "../../../components/cardPensum/CardPensum";
import PaginationComponent from "../../../components/pagination/Pagination";

const Undergraduate = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Box>
      {/**********/}
      {/* BANNER */}
      {/**********/}
      <Banner
        urlImage={ImgBanner}
        title="Microcertificaciones"
        description="Nuestras microcertificaciones permiten centrarse en áreas técnicas o
        habilidades prácticas en sectores como la tecnología, el marketing
        digital, la gestión de proyectos, entre otros."
      />

      {/********/}
      {/* MAIN */}
      {/********/}
      <Box className="mainContent">
        {/****************************/}
        {/* INFORMACION DE GRADUADOS */}
        {/****************************/}
        <Box className="containerInfoUndergraduate">
          {/**********/}
          {/* TITULO */}
          {/**********/}
          <Typography className="title size60">
            ¿Qué quieres aprender?
          </Typography>

          {/***************/}
          {/* DESCRIPCION */}
          {/***************/}
          <Typography className="description size18">
            Nuestros programas están diseñados para prepararte para un futuro
            brillante en tu campo de elección. Obtén los conocimientos que
            necesitas, aprende de profesores apasionados y hazlo a tu tiempo. En
            UVirtual, alcanza tus metas profesionales y ábrete camino hacia el
            éxito. ¡Tu carrera comienza aquí!
          </Typography>

          {/************************/}
          {/* CONTENEDOR DE FILTRO */}
          {/************************/}
          <Box className="containerFilter">
            {/**********/}
            {/* BUSCAR */}
            {/**********/}
            <OutlinedInput
              className="inputWhite inputSearch"
              placeholder="Buscar"
              startAdornment={
                <InputAdornment position="start">
                  <IconSearch />
                </InputAdornment>
              }
            />

            <Button
              disableTouchRipple
              className="btnSearch btnGradientOrangeSquare size20"
            >
              <Typography className="size20">Buscar</Typography>
            </Button>
          </Box>
        </Box>

        {/*******************************/}
        {/* CONTENEDOR CARTAS GRADUADOS */}
        {/*******************************/}
        <Box className="containerCardsUndergraduate">
          <Stack className="chipUndergraduate" direction="row" spacing={1}>
            <Chip label="Todos" onClick={handleClick} />
            <Chip label="Jurídico" variant="outlined" onClick={handleClick} />
            <Chip
              label="Ciencia y Teccnología"
              variant="outlined"
              onClick={handleClick}
            />
            <Chip label="Salud" variant="outlined" onClick={handleClick} />
            <Chip
              label="Económicas y Administrativas"
              variant="outlined"
              onClick={handleClick}
            />
            <Chip
              label="Comunicación"
              variant="outlined"
              onClick={handleClick}
            />
            <Chip label="Educación" variant="outlined" onClick={handleClick} />
          </Stack>

          {/**********/}
          {/* PENSUM */}
          {/**********/}
          <Box className="containerCardPensum">
            {pensumCourses.map((item, index) => (
              <CardPensum
                code={item.code}
                key={index}
                img={item.img}
                title={item.title}
                description={item.description}
                path={item.path}
                course={item.course}
                state={item.state}
                time={item.time}
                dateFirst={item.dateFirst}
                dateLast={item.dateLast}
                value={item.value}
                footer={item.footer}
                index={index}
              />
            ))}
          </Box>
        </Box>

        {/**************/}
        {/* PAGINACION */}
        {/**************/}
        <PaginationComponent />

        {/************************/}
        {/* SERVICIO DE ATENCIÓN */}
        {/************************/}
        <CustomerService />
      </Box>
    </Box>
  );
};

export default Undergraduate;
