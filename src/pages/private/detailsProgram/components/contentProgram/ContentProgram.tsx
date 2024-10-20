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
  styled
} from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

// IMPORTADOS
import "./contentProgram.scss";
import IconDownload from "../../../../../assets/icons/IconDownload";
import IconArrowDown from "../../../../../assets/icons/IconArrowDown";
import {
  pensumPrograms,
  pensumDoctorate,
  pensumMastery,
  selectArea,
} from "../../../../../components/dataApi/DataApi";
import React, { useState } from "react";
import IconArrowUpRight from "../../../../../assets/icons/IconArrowUpRight";

interface ContentProgramProps {
  codeData: string;
  posData: number;
}

const validatePensum = (code: string) => {
  if (code === "program") {
    return pensumPrograms;
  } else if (code === "mastery") {
    return pensumMastery;
  } else if (code === "doctorate") {
    return pensumDoctorate;
  }
};

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<IconArrowDown />} {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  color: "var(--colorGrey)",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(0),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "0px solid rgba(0, 0, 0, .125)",
  color: "var(--colorGrey)",
}));

const ContentProgram = ({ codeData, posData }: ContentProgramProps) => {
  const [age, setAge] = useState("");
  const [expanded, setExpanded] = React.useState<string | false>(false);
  // "panel0"

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

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
            {validatePensum(codeData)![posData].longDescription}
          </Typography>

          {/****************************/}
          {/* BOTON DESCARGAR PROGRAMA */}
          {/****************************/}
          <Button
            disableTouchRipple
            className="btnGradientOrangeCircle"
            href={validatePensum(codeData)![posData]?.anexe}
            target="_blank"
          >
            <IconDownload />

            <Typography className="size16">
              Descargar programa completo
            </Typography>
          </Button>
        </Box>

        {/******************************/}
        {/* CARTA EGRESADOS PROGRAMA */}
        {/******************************/}
        <Box className="cardDescriptionProgram">
          {/**********/}
          {/* TITULO */}
          {/**********/}
          <Typography className="title size32">
            Fin del Aprendizaje y Perfil de egreso
          </Typography>

          {/***************/}
          {/* DESCRIPTION */}
          {/***************/}
          <Typography className="description size20">
            {validatePensum(codeData)![posData].egressInfo}
          </Typography>
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

          {validatePensum(codeData)![posData].studyPlan.map((item, index) => (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary aria-controls="panel0d-content" id="panel0d-header">
                <Typography className="size25">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="size20">
                  {item.value.split("\n").map(item => (
                    <>
                      • {item}<br />
                    </>
                  ))}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}

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
              {validatePensum(codeData)![posData].title}
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
          <Button disableTouchRipple className="btnGradientOrangeCircle" href="courses">
            <Typography className="size16">COMIENZA AHORA</Typography>

            <IconArrowUpRight />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentProgram;
