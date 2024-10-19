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
import { pensumCourses } from "../../../../components/dataApi/DataApi";

interface SectionsCourseProps {
  posData: number;
}

const SectionsCourse = ({ posData }: SectionsCourseProps) => {
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
            {pensumCourses[posData]!.longDescription}
          </Typography>

          {/****************************/}
          {/* BOTON DESCARGAR PROGRAMA */}
          {/****************************/}
          {/* <Button disableTouchRipple className="btnGradientOrangeCircle">
            <IconDownload />

            <Typography className="size16">
              Descargar programa completo
            </Typography>
          </Button> */}
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
            <Box
              width="100%"
              display="flex"
              flexDirection={{ xs: "column", lg: "row" }}
              gap={{ xs: "20px", lg: "0px" }}
            >
              {pensumCourses[posData]!.itemsLearn.map((item, index) => (
                <>
                  {index < 2 &&
                    <Box
                      className="contentStackWork"
                      padding={{ xs: "10px 20px", md: "15px 30px", xl: "20px 50px" }}
                    >
                      <Typography className="description size18">
                        <b>
                          {item.title}
                        </b>
                        {" "}{item.description}
                      </Typography>
                    </Box>
                  }
                </>
              ))}
            </Box>
            <Box
              width="100%"
              display="flex"
              flexDirection={{ xs: "column", lg: "row" }}
              gap={{ xs: "20px", lg: "0px" }}
            >
              {pensumCourses[posData]!.itemsLearn.map((item, index) => (
                <>
                  {index > 1 &&
                    <Box
                      className="contentStackWork"
                      padding={{ xs: "10px 20px", md: "15px 30px", xl: "20px 50px" }}
                    >
                      <Typography className="description size18">
                        <b>
                          {item.title}
                        </b>
                        {" "}{item.description}
                      </Typography>
                    </Box>
                  }
                </>
              ))}
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
            {pensumCourses[posData]!.itemsReq.map((item) => (
              <>
                • <b>{item.title}</b>{" "}{item.description} <br />
              </>
            ))}
          </Typography>

          {/*********/}
          {/* TITLE */}
          {/*********/}
          {/* <Typography className="title size32">
            ¿Quiénes nos certifican?
          </Typography> */}

          {/***************/}
          {/* DESCRIPTION */}
          {/***************/}
          {/* <Typography className="description size20">
            Nuestros cursos están certificados por empresas líderes de cada
            industria como...
            <br /> <br />
            Conoce más sobre las empresas que nos certifican
          </Typography> */}

          {/*******************/}
          {/* BOTON DESCARGAR */}
          {/*******************/}
          {/* <Button disableTouchRipple className="btnDownload">
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
          </Button> */}
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
      </Box>
    </Box>
  );
};

export default SectionsCourse;
