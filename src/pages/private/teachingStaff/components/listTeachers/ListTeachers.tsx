import { useState } from "react";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";

// IMPORTADOS
import "./listTeachers.scss";
import IconX from "../../../../../assets/icons/IconX";
import imgProfile from "../../../../../assets/images/imgTeacher.png";

const ListTeachers = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/***************/}
      {/* BOTON MODAL */}
      {/***************/}
      <Button onClick={handleOpen} className="btnProfile">
        {/**********/}
        {/* IMAGEN */}
        {/**********/}
        <Box className="imgProfile" sx={{ background: `url(${imgProfile})` }} />

        <Typography className="title size25">Ana Belén Calvo Calvo</Typography>
        <Typography className="description size20">
          Licenciada en Psicología
        </Typography>
      </Button>

      {/*********/}
      {/* MODAL */}
      {/*********/}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="positionModal">
          <Box className="cardModalTeacher">
            {/***********/}
            {/* BOTON X */}
            {/***********/}
            <IconButton
              disableTouchRipple
              className="btnX"
              onClick={handleClose}
            >
              <IconX color="var(--colorGrey)" />
            </IconButton>

            {/*******************/}
            {/* CONTENEDOR INFO */}
            {/*******************/}
            <Box className="contentModalTeacher">
              {/**********/}
              {/* IMAGEN */}
              {/**********/}
              <Box
                className="imgProfile"
                sx={{ background: `url(${imgProfile})` }}
              />

              {/*****************/}
              {/* INFO PERSONAL */}
              {/*****************/}
              <Box className="infoPersonal">
                {/**********/}
                {/* TITULO */}
                {/**********/}
                <Typography className="title size50">
                  Ana Belén Calvo Calvo
                </Typography>

                {/***************/}
                {/* DESCRIPTION */}
                {/***************/}
                <Typography className="description size20">
                  Licenciada en Psicología por la Universidad de Salamanca,
                  Doctora en Psicología por la Universidad Complutense de Madrid
                  y Postgrado en Metodología de la investigación: diseño y
                  estadística en ciencias de la salud. Universidad Autónoma de
                  Barcelona.
                </Typography>
              </Box>

              {/***************/}
              {/* HABILIDADES */}
              {/***************/}
              <Box className="infoHabilities">
                {/*************/}
                {/* SECCION 1 */}
                {/*************/}
                <Box className="section1">
                  <Typography className="title size25">Experiencia</Typography>
                  <Typography className="description size20">
                    Desde 2009 ha desarrollado su labor investigadora y en el
                    Servicio de Psiquiatría del Niño y del Adolescente del
                    Hospital General Universitario Gregorio Marañón, Universidad
                    Complutense de Madrid. Formación en clínica e investigación
                    en ORYGEN Youth Health Clinical and Research Centre,
                    University of Melbourne. Australia. Tiene Formación
                    específica en Neuropsicología y Educación y ha participado
                    como ponente en congresos y reuniones científicas nacionales
                    e internacionales. Desde mayo de 2014, trabaja como
                    profesora en el Máster en Neuropsicología y Educación de la
                    UNIR.
                  </Typography>
                </Box>

                {/*************/}
                {/* SECCION 2 */}
                {/*************/}
                <Box className="section2">
                  <Box>
                    <Typography className="title size25">
                      Líneas de investigación
                    </Typography>
                    <Typography className="description size20">
                      Neuropsicología, trastornos del neurodesarrollo,
                      Intervención temprana, psicoeducación.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="title size25">
                      Algunos estudios en los que imparte clase
                    </Typography>
                    <Typography className="description size20">
                      Experto Universitario en Redacción Científica
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ListTeachers;
