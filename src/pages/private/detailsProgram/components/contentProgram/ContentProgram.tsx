import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

// IMPORTADOS
import "./contentProgram.scss";
import IconDownload from "../../../../../assets/icons/IconDownload";
import { selectArea } from "../../../../../components/dataApi/DataApi";
import { useState } from "react";
import IconArrowUpRight from "../../../../../assets/icons/IconArrowUpRight";

const ContentProgram = () => {
  const [age, setAge] = useState("");

  // SELECT
  const handleSelect = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Box className="containerSectionProgram">
      {/*************/}
      {/* SECCION 1 */}
      {/*************/}
      <Box className="section1Program">
        {/******************************/}
        {/* CARTA DESCRIPCION PROGRAMA */}
        {/******************************/}
        <Box className="cardDescriptionProgram">
          {/**********/}
          {/* TITULO */}
          {/**********/}
          <Typography className="title size32">
            Descripción del programa
          </Typography>

          {/***************/}
          {/* DESCRIPTION */}
          {/***************/}
          <Typography className="description size20">
            Este programa está diseñado para aquellos apasionados por
            transformar la educación y hacer contribuciones significativas al
            campo pedagógico. Nuestro enfoque integral combina teoría educativa
            avanzada, metodologías innovadoras y prácticas basadas en la
            evidencia. A lo largo de tu viaje académico, trabajarás de cerca con
            profesores destacados y colaborarás en investigaciones que abordan
            los desafíos contemporáneos de la educación. Prepárate para liderar
            el cambio, influir en políticas educativas y convertirte en un líder
            visionario. en el ámbito educativo. Únete a nosotros y transforma tu
            pasión por la educación en una carrera en constante evolución.
          </Typography>

          {/****************************/}
          {/* BOTON DESCARGAR PROGRAMA */}
          {/****************************/}
          <Button disableTouchRipple className="btnGradientOrangeCircle">
            <IconDownload />

            <Typography className="size16">
              Descargar programa completo
            </Typography>
          </Button>
        </Box>

        {/******************/}
        {/* DONDE TRABAJAR */}
        {/******************/}
        <Box className="whereWork">
          {/**********/}
          {/* TITULO */}
          {/**********/}
          <Typography className="title size32">¿Dónde trabajar?</Typography>

          {/*********/}
          {/* AREAS */}
          {/*********/}
          <Box className="containerStackWork">
            {/***************************/}
            {/* INVESTIGACION EDUCATIVA */}
            {/***************************/}
            <Box
              width="100%"
              display="flex"
              flexDirection={{ xs: "column", lg: "row" }}
              gap={{ xs: "20px", lg: "0px" }}
            >
              <Box
                className="contentStackWork"
                padding={{ xs: "10px 20px", md: "15px 30px", xl: "20px 50px" }}
              >
                <Typography className="titleWork size25">
                  Investigación educativa.
                </Typography>

                <Typography className="description size18">
                  Diseña, coordina, elabora e implementa proyectos innovadores
                  de investigación educativa.
                </Typography>
              </Box>

              {/****************************/}
              {/* INSTITUCIONES EDUCATIVAS */}
              {/****************************/}
              <Box
                className="contentStackWork"
                padding={{ xs: "10px 20px", md: "15px 30px", xl: "20px 50px" }}
              >
                <Typography className="titleWork size25">
                  Instituciones educativas.
                </Typography>

                <Typography className="description size18">
                  Desarrolla y evalúa con eficiencia planes y programas de
                  estudio para el logro de objetivos académicos.
                </Typography>
              </Box>
            </Box>

            <Box
              width="100%"
              display="flex"
              flexDirection={{ xs: "column", lg: "row" }}
              gap={{ xs: "20px", lg: "0px" }}
            >
              {/*****************************************/}
              {/* COORDINADOR DE DEPARTAMENTO ACADEMICO */}
              {/*****************************************/}
              <Box
                className="contentStackWork"
                padding={{ xs: "10px 20px", md: "15px 30px", xl: "20px 50px" }}
              >
                <Typography className="titleWork size25">
                  Coordinador de departamento académico.
                </Typography>

                <Typography className="description size18">
                  Motiva e involucra a los participantes de los procesos
                  educativos a través de metodologías de gestión de proyectos.
                </Typography>
              </Box>

              {/***********************/}
              {/* PROCESOS EDUCATIVOS */}
              {/***********************/}
              <Box
                className="contentStackWork"
                padding={{ xs: "10px 20px", md: "15px 30px", xl: "20px 50px" }}
              >
                <Typography className="titleWork size25">
                  Procesos educativos.
                </Typography>

                <Typography className="description size18">
                  Realiza evaluaciones institucionales, curriculares y docentes
                  para la mejora continua de las instituciones educativas.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/*******************/}
        {/* PLAN DE ESTUDIO */}
        {/*******************/}
        <Box className="planStudy">
          {/*********/}
          {/* TITLE */}
          {/*********/}
          <Typography className="title size32">Plan de estudios</Typography>

          <Box className="formPlanStudy">
            {/***********************/}
            {/* RESUMEN DE CRÉDITOS */}
            {/***********************/}
            <FormControl className="selectBorder">
              <InputLabel id="demo-simple-select-label" className="size16">
                Resumen de créditos
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleSelect}
              >
                {selectArea.map((item, index) => (
                  <MenuItem key={index} value={item.value} className="size16">
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/**************/}
            {/* PRIMER AÑO */}
            {/**************/}
            <FormControl className="selectBorder">
              <InputLabel id="demo-simple-select-label" className="size16">
                Primer año
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleSelect}
              >
                {selectArea.map((item, index) => (
                  <MenuItem key={index} value={item.value} className="size16">
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/***************/}
            {/* SEGUNDO AÑO */}
            {/***************/}
            <FormControl className="selectBorder">
              <InputLabel id="demo-simple-select-label" className="size16">
                Segundo año
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleSelect}
              >
                {selectArea.map((item, index) => (
                  <MenuItem key={index} value={item.value} className="size16">
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/*******************/}
          {/* BOTON DESCARGAR */}
          {/*******************/}
          <Button disableTouchRipple className="btnDownload">
            <IconDownload
              color="var(--colorBlueLight)"
              width="28px"
              height="30px"
            />

            <Typography>
              Doctorado en Pedagogía y Educación
              <br />
              <strong>Descargar plan de estudios.</strong>
            </Typography>
          </Button>
        </Box>
      </Box>

      {/*************/}
      {/* SECCION 2 */}
      {/*************/}
      <Box className="section2Program">
        {/************************************/}
        {/* FORMULARIO SOLICITAR INFORMACION */}
        {/************************************/}
        <Box className="containerFormInfoProgram">
          <Typography className="title size32">
            Solicitar información
          </Typography>

          <Box className="formProgram">
            {/*******************/}
            {/* NOMBRE COMPLETO */}
            {/*******************/}
            <OutlinedInput
              className="inputBorder"
              placeholder="Nombre completo"
            />
            {/**********************/}
            {/* CORREO ELECTRONICO */}
            {/**********************/}
            <OutlinedInput
              className="inputBorder"
              placeholder="Correo electrónico"
            />

            {/********/}
            {/* PAÍS */}
            {/********/}
            <FormControl className="selectBorder">
              <InputLabel id="demo-simple-select-label" className="size16">
                País
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleSelect}
              >
                {selectArea.map((item, index) => (
                  <MenuItem key={index} value={item.value} className="size16">
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/**********/}
            {/* CIUDAD */}
            {/**********/}
            <FormControl className="selectBorder">
              <InputLabel id="demo-simple-select-label" className="size16">
                Ciudad
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleSelect}
              >
                {selectArea.map((item, index) => (
                  <MenuItem key={index} value={item.value} className="size16">
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/***********/}
            {/* CELULAR */}
            {/***********/}
            <OutlinedInput className="inputBorder" placeholder="Celular" />

            {/*********************/}
            {/* NIVEL DE ESTUDIOS */}
            {/*********************/}
            <FormControl className="selectBorder">
              <InputLabel id="demo-simple-select-label" className="size16">
                Nivel de estudios
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleSelect}
              >
                {selectArea.map((item, index) => (
                  <MenuItem key={index} value={item.value} className="size16">
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/***************/}
          {/* DESCRIPCION */}
          {/***************/}
          <Typography className="description size18">
            UVirtual, tratará sus datos personales conforme a su solicitud para
            contactarle e informarle del programa seleccionado, pudiendo
            contactar con usted a través de medios electrónicos (WhatsApp y/o
            correo electrónico) y por medios telefónicos, siendo eliminados una
            vez facilitada dicha información y/o transcurridas las citadas
            convocatorias.
          </Typography>

          {/*********/}
          {/* BOTON */}
          {/*********/}
          <Button className="btnGradientOrangeSquare">
            <Typography className="size20">SOLICITAR INFORMACIÓN</Typography>
          </Button>
        </Box>

        {/************/}
        {/* CARTA APRENDER */}
        {/************/}
        <Box className="learnCard">
          {/**********/}
          {/* TITULO */}
          {/**********/}
          <Typography className="title size32">
            Aprender nunca había sido tan fácil.
          </Typography>

          {/***************/}
          {/* DESCRIPCION */}
          {/***************/}
          <Typography className="description size20">
            Comienza, transforma e impulsa tu carrera profesional con más de
            5400 cursos, títulos de pregrado y posgrado en cualquier lugar del
            mundo.
          </Typography>

          {/***************/}
          {/* BOTON AHORA */}
          {/***************/}
          <Button disableTouchRipple className="btnGradientOrangeCircle">
            <Typography className="size16">COMIENZA AHORA</Typography>

            <IconArrowUpRight />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentProgram;
