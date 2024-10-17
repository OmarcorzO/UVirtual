import { useState } from "react";
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
import "./magazine.scss";
import { imgMagazines, selectArea } from "../../../components/dataApi/DataApi";
import Banner from "../../../components/banner/Banner";
import ImgBanner from "../../../assets/images/bannerMagazine.png";
import CardImg from "../../../components/cardImg/CardImg";
import IconSearch from "../../../assets/icons/IconSearch";
import PaginationComponent from "../../../components/pagination/Pagination";

const Magazine = () => {
  const [age, setAge] = useState("");

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
        title="Revista UVirtual"
        description="La Vicerrectoría de Investigaciones informa a todos los investigadores de la UNIVERSIDAD UVIRTUAL que la plataforma Open Journal Systems (OJS), se encuentra disponible para los investigadores que dirijan publicaciones de revistas y documentos periódicos institucionales o que están interesados en impulsar este tipo de publicaciones"
      />

      {/********/}
      {/* MAIN */}
      {/********/}
      <Box className="mainContent">
        {/************************/}
        {/* CONTENEDOR DE FILTRO */}
        {/************************/}
        <Box className="containerFilter">
          {/*******************/}
          {/* TIPO DE ESTUDIO */}
          {/*******************/}
          <FormControl className="selectWhite">
            <InputLabel id="demo-simple-select-label" className="size18">
              Seleccione una categoría
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

        <Box className="containerCardsMagazine">
          {imgMagazines.map((item, index) => (
            <CardImg key={index} img={item.img} />
          ))}
        </Box>

        {/**************/}
        {/* PAGINACION */}
        {/**************/}
        <PaginationComponent />
      </Box>
    </Box>
  );
};

export default Magazine;
