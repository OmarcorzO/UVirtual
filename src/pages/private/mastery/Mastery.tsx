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
import "../undergraduate/undergraduate.scss";
import {
  pensumMastery,
  selectArea,
} from "../../../components/dataApi/DataApi";
import Banner from "../../../components/banner/Banner";
import ImgBanner from "../../../assets/images/bannerDoctorate.png";
import CustomerService from "../../../components/customerService/CustomerService";
import IconSearch from "../../../assets/icons/IconSearch";
import CardPensum from "../../../components/cardPensum/CardPensum";
import PaginationComponent from "../../../components/pagination/Pagination";

const Mastery = () => {
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
        title="Filosofía Política"
        description="Investiga y explora cuestiones filosóficas relacionadas con la política, la teoría política y la filosofía social."
      />

      {/********/}
      {/* MAIN */}
      {/********/}
      <Box className="mainContent">
        {/************************/}
        {/* CONTENEDOR DE FILTRO */}
        {/************************/}
        <Box className="containerFilter">
          {/****************/}
          {/* ESPECIALIDAD */}
          {/****************/}
          <FormControl className="selectWhite">
            <InputLabel id="demo-simple-select-label" className="size18">
              Especialidad
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
            {pensumMastery.map((item, index) => (
              <CardPensum
                code={item.code}
                key={index}
                img={item.img}
                title={item.title}
                path={item.path}
                description={item.description}
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

export default Mastery;
