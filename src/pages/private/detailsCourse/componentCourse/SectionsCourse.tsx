import { Box, Button, IconButton, Typography } from "@mui/material";

// IMPORTADOS
import "../../detailsProgram/detailsProgram.scss";
import IconDownload from "../../../../assets/icons/IconDownload";
import IconArrowUpRight from "../../../../assets/icons/IconArrowUpRight";
import IconFavorite from "../../../../assets/icons/IconFavorite";
import IconWatch from "../../../../assets/icons/IconWatch";
import IconSignal from "../../../../assets/icons/IconSignal";
import IconCertificate from "../../../../assets/icons/IconCertificate";
import IconOnline2 from "../../../../assets/icons/IconOnline2";
import IconInfinite from "../../../../assets/icons/IconInfinite";
import { useNavigate } from "react-router-dom";

const SectionsCourse = () => {
  const nav = useNavigate()

  return (
    <Box className="containerSectionProgram">
      {/*************/}
      {/* SECCION 1 */}
      {/*************/}
      <Box className="section1Program">
        {/***************************/}
        {/* CARTA DESCRIPCION CURSO */}
        {/***************************/}
        <Box className="cardDescriptionProgram">
          {/**********/}
          {/* TITULO */}
          {/**********/}
          <Typography className="title size32">
            Descripción del curso
          </Typography>

          {/***************/}
          {/* DESCRIPTION */}
          {/***************/}
          <Typography className="description size20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
          <Typography className="title size32">¿Qué aprenderás?</Typography>

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
                <Typography className="description size18">
                  Crear un portafolio profesional de UX, incluyendo proyectos de
                  principio a fin, para que esté listo para solicitar puestos de
                  trabajo
                </Typography>
              </Box>

              {/****************************/}
              {/* INSTITUCIONES EDUCATIVAS */}
              {/****************************/}
              <Box
                className="contentStackWork"
                padding={{ xs: "10px 20px", md: "15px 30px", xl: "20px 50px" }}
              >
                <Typography className="description size18">
                  Aplicar conceptos fundamentales de UX, como el diseño centrado
                  en el usuario, la accesibilidad y el diseño centrado en la
                  equidad
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
                <Typography className="description size18">
                  Comprender los fundamentos de la investigación UX, como la
                  planificación de estudios de investigación, la realización de
                  entrevistas y estudios de usabilidad, y la síntesis de los
                  resultados de la investigación
                </Typography>
              </Box>

              {/***********************/}
              {/* PROCESOS EDUCATIVOS */}
              {/***********************/}
              <Box
                className="contentStackWork"
                padding={{ xs: "10px 20px", md: "15px 30px", xl: "20px 50px" }}
              >
                <Typography className="description size18">
                  Siga el proceso de diseño: empatice con los usuarios, defina
                  los puntos de dolor, idee soluciones, cree wireframes y
                  prototipos, pruebe e itere sobre los diseños
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/**************/}
        {/* REQUISITOS */}
        {/**************/}
        <Box className="planStudy">
          {/*********/}
          {/* TITLE */}
          {/*********/}
          <Typography className="title size32">Requisitos</Typography>

          {/***************/}
          {/* DESCRIPTION */}
          {/***************/}
          <Typography className="description size20">
            Para este curso no es necesario tener conocimientos previos. Para
            mejorar tu experiencia de cursada, te aconsejamos contar con:
            <br />
            • PC de 2 a 4 GB de RAM.
            <br />
            • La extensión de Google Chrome Google Draw.io
            <br />• Figma, Adobe XD o Sketch
          </Typography>

          {/*********/}
          {/* TITLE */}
          {/*********/}
          <Typography className="title size32">
            ¿Quiénes nos certifican?
          </Typography>

          {/***************/}
          {/* DESCRIPTION */}
          {/***************/}
          <Typography className="description size20">
            Nuestros cursos están certificados por empresas líderes de cada
            industria como...
            <br /> <br />
            Conoce más sobre las empresas que nos certifican
          </Typography>

          {/*******************/}
          {/* BOTON DESCARGAR */}
          {/*******************/}
          <Button disableTouchRipple className="btnDownload">
            <IconDownload
              color="var(--colorBlueLight)"
              width="28px"
              height="30px"
            />

            <Typography className="size18">
              Duración: 12 semanas
              <br />
              <strong>Descargar programa</strong>
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
          {/***************/}
          {/* DESCRIPCION */}
          {/***************/}
          <Box className="characteristics">
            <Typography className="size18">
              <IconWatch />
              Duración: 12 semanas.
            </Typography>

            <Typography className="size18">
              <IconSignal />
              Nivel principiante.
            </Typography>

            <Typography className="size18">
              <IconCertificate />
              Certificado de finalización.
            </Typography>

            <Typography className="size18">
              <IconOnline2 />
              Clases en línea.
            </Typography>

            <Typography className="size18">
              <IconInfinite />
              Acceso de por vida.
            </Typography>
          </Box>

          {/**********/}
          {/* PRECIO */}
          {/**********/}
          <Box className="price">
            <Typography className="name size20">PRECIO DEL CURSO</Typography>
            <Typography className="value size50">$79.900COP</Typography>
          </Box>

          {/*********/}
          {/* BOTON */}
          {/*********/}
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              ">.btnInscription": {},
              ">.btnFavorite": {
                backgroundColor: "rgba(60, 112, 186, 0.25)",
                width: "fit-content !important",
                padding: "20px !important",
              },
            }}
          >
            {/********************/}
            {/* INSCRIBETE AHORA */}
            {/********************/}
            <Button
              disableTouchRipple
              className="btnInscription btnGradientOrangeSquare"
              onClick={() => nav("/online-payment")}
            >
              <Typography className="size20">INSCRÍBETE AHORA</Typography>

              <Typography className="size20">
                Comienza el 01 de Octubre
              </Typography>
            </Button>

            {/******************/}
            {/* BOTON FAVORITO */}
            {/******************/}
            <IconButton disableTouchRipple className="btnFavorite">
              <IconFavorite />
            </IconButton>
          </Box>
        </Box>

        {/******************/}
        {/* CARTA APRENDER */}
        {/******************/}
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

export default SectionsCourse;
