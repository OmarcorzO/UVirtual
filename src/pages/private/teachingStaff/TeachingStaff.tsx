import { useState } from "react";
import {
  Box,
  Button,
  Divider,
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
import "./teachingStaff.scss";
import { selectArea } from "../../../components/dataApi/DataApi";
import Banner from "../../../components/banner/Banner";
import ImgBanner from "../../../assets/images/bannerTeachingStaff.png";
import IconSearch from "../../../assets/icons/IconSearch";
import IconTeacher from "../../../assets/icons/IconTeacher";
import IconGraduate from "../../../assets/icons/IconGraduate";
import IconStar from "../../../assets/icons/IconStar";
import ListTeachers from "./components/listTeachers/ListTeachers";
import PaginationComponent from "../../../components/pagination/Pagination";

const TeachingStaff = () => {
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
        title="En UVirtual estamos comprometidos con la educación superior."
        description="Somos una universidad global de educación superior comprometida con la excelencia académica y la formación integral de sus estudiantes. Desarrollamos experiencias de aprendizaje flexible, práctico y útil para todos y todas. En UVirtual creemos en la importancia de la educación como un motor de transformación social y personal."
      />

      {/********/}
      {/* MAIN */}
      {/********/}
      <Box className="mainContent">
        {/*******************/}
        {/* CONTAINER ICONS */}
        {/*******************/}
        <Box className="containerIcons">
          <Box>
            <IconTeacher
              width="100px"
              height="100px"
              color="var(--colorBlueDark)"
            />

            <Divider orientation="horizontal" />

            <Typography className="size25">
              Profesores internacionales de impacto global
            </Typography>
          </Box>

          <Box>
            <IconGraduate
              width="100px"
              height="100px"
              color="var(--colorBlueDark)"
            />

            <Divider orientation="horizontal" />

            <Typography className="size25">
              Profesionales de alta experiencia y compromiso social
            </Typography>
          </Box>

          <Box>
            <IconStar />

            <Divider orientation="horizontal" />

            <Typography className="size25">
              Garantía de una titulación que cumple con las necesidades de las
              empresas.
            </Typography>
          </Box>
        </Box>

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

        {/***********************/}
        {/* LISTA DE PROFESORES */}
        {/***********************/}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            margin: "0 auto 80px",
            maxWidth: "1620px",
            height: "fit-content",
            gap: "20px 0",
          }}
        >
          <ListTeachers />
          <ListTeachers />
          <ListTeachers />
          <ListTeachers />
          <ListTeachers />
          <ListTeachers />
          <ListTeachers />
          <ListTeachers />
        </Box>

        {/**************/}
        {/* PAGINACION */}
        {/**************/}
        <PaginationComponent />
      </Box>
    </Box>
  );
};

export default TeachingStaff;
