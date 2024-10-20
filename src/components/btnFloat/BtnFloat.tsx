import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Fab,
  Fade,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Popper,
  PopperPlacementType,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";

// IMPORTADOS
import "./btnFloat.scss";
import { selectArea } from "../dataApi/DataApi";
import IconChatbot from "../../assets/icons/IconChatbot";
import IconMinus from "../../assets/icons/IconMinus";
import Iconx from "../../assets/icons/IconX";
import IconShare from "../../assets/icons/IconShare";
import IconClip from "../../assets/icons/IconClip";
import IconSend from "../../assets/icons/IconSend ";

// BOTON CHATBOT
export const BtnFloatChatbot = () => {
  const [age, setAge] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();
  const { pathname } = useLocation();

  // ABRIR CHATBOT
  const handleChat =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  // SELECT
  const handleSelect = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  // HABLAR CON CHAT
  const [changeChat, setChangeChat] = useState(true);

  // Función para alternar la vista
  const toggleChangeChat = () => {
    setChangeChat((prevState) => !prevState);
  };

  // MOSTRAR SOLO EN LANDING
  if (pathname === "/magazine") return null;

  return (
    <>
      {/***************/}
      {/* BOTON ICONO */}
      {/***************/}
      <Button
        disableTouchRipple
        className="btnFloat"
        onClick={handleChat("left-end")}
        sx={{
          "@media (max-width: 700px)": {
            display: "none",
          },
        }}
      >
        <IconChatbot />
      </Button>

      {/***********/}
      {/* CHATBOT */}
      {/***********/}
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            {/***********/}
            {/* CHATBOT */}
            {/***********/}
            <Box className="chatbot">
              <Box className="chatbotHeader">
                <Box className="sideIcon">
                  {/*****************/}
                  {/* ICONO CHATBOT */}
                  {/*****************/}
                  <IconChatbot
                    width="50px"
                    height="50px"
                    colorBackground="#fff"
                    colorIcon="var(--colorOrange)"
                  />

                  {/**********/}
                  {/* TITULO */}
                  {/**********/}
                  <Typography className="size25">ChatbUV</Typography>
                </Box>

                {/***********/}
                {/* BOTONES */}
                {/***********/}
                <Box>
                  {/***************/}
                  {/* BOTON MENOS */}
                  {/***************/}
                  <IconButton onClick={handleChat("left-end")}>
                    <IconMinus />
                  </IconButton>

                  {/***********/}
                  {/* BOTON X */}
                  {/***********/}
                  <IconButton onClick={handleChat("left-end")}>
                    <Iconx />
                  </IconButton>
                </Box>
              </Box>

              {/*********************/}
              {/* CONTENIDO CHATBOT */}
              {/*********************/}
              <Box className="contentChatbot size14">
                {changeChat ? (
                  // FORMULARIO CHATBOT
                  <>
                    <Typography className="note">
                      Antes de ofrecerte una atención necesitamos conocerte
                    </Typography>

                    <Box className="contentForm">
                      {/*******************/}
                      {/* NOMBRE COMPLETO */}
                      {/*******************/}
                      <OutlinedInput
                        className="inputBorder"
                        placeholder="Nombre completo"
                      />

                      <Box display={"flex"} gap={2}>
                        <FormControl
                          className="selectBorder"
                          sx={{ maxWidth: "128px" }}
                        >
                          <InputLabel
                            id="demo-simple-select-label"
                            className="size16"
                          >
                            Tipo
                          </InputLabel>

                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleSelect}
                          >
                            {selectArea.map((item, index) => (
                              <MenuItem
                                key={index}
                                value={item.value}
                                className="size16"
                              >
                                {item.title}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>

                        {/********************/}
                        {/* NUMERO DOCUMENTO */}
                        {/********************/}
                        <OutlinedInput
                          className="inputBorder"
                          placeholder="Numero documento"
                        />
                      </Box>

                      {/**********************/}
                      {/* CORREO ELECTRONICO */}
                      {/**********************/}
                      <OutlinedInput
                        className="inputBorder"
                        placeholder="Correo electrónico"
                      />

                      {/***********/}
                      {/* CELULAR */}
                      {/***********/}
                      <OutlinedInput
                        className="inputBorder"
                        placeholder="Celular"
                      />

                      <FormControl className="selectBorder">
                        <InputLabel
                          id="demo-simple-select-label"
                          className="size16"
                        >
                          País
                        </InputLabel>

                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          onChange={handleSelect}
                        >
                          {selectArea.map((item, index) => (
                            <MenuItem
                              key={index}
                              value={item.value}
                              className="size16"
                            >
                              {item.title}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>

                    {/**************************/}
                    {/* TERMINOS Y CONDICIONES */}
                    {/**************************/}
                    <FormControlLabel
                      className="checkboxTerm"
                      required
                      label={
                        <span className="size14">
                          Al ingresar aceptas la{" "}
                          <strong>
                            Política de Tratamiento de Datos Personales de
                            UVirtual
                          </strong>{" "}
                          y autorizas el tratamiento de los datos que
                          proporciones a través de este formulario y durante la
                          asesoría.
                        </span>
                      }
                      control={<Checkbox disableTouchRipple />}
                    />

                    {/*************************/}
                    {/* SOLICITAR INFORMACION */}
                    {/*************************/}
                    <Button
                      disableTouchRipple
                      className="btnEnter btnGradientOrangeSquare size20"
                      onClick={toggleChangeChat}
                    >
                      <Typography className="size20">Entrar</Typography>
                    </Button>
                  </>
                ) : (
                  <Box position={"relative"} height={"630px"}>
                    {/* CHATEAR CON CHATBOX */}
                    <Box display={"grid"} gap={"20px"}>
                      <Box className="chatAnswer">
                        <IconChatbot
                          colorBackground="var(--colorGrey)"
                          colorIcon="#fff"
                          width="40px"
                          height="40px"
                        />

                        <Typography className="size14">
                          ¡Hola! Soy ChatbUV, tu asistente virtual. Estoy
                          diseñada para resolver de manera óptima y eficaz tus
                          dudas e inquietudes. Para empezar necesito saber qué
                          tipo de usuario eres:
                        </Typography>
                      </Box>

                      <Box className="chatAnswer">
                        <IconChatbot
                          colorBackground="var(--colorGrey)"
                          colorIcon="#fff"
                          width="40px"
                          height="40px"
                        />

                        <Box display={"grid"} gap={"10px"}>
                          <Typography className="size14">Aspirante</Typography>

                          <Typography className="size14">Estudiante</Typography>

                          <Typography className="size14">Egresado</Typography>

                          <Typography className="size14">Docente</Typography>

                          <Typography className="size14">Empresa</Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/**********/}
                    {/* FOOTER */}
                    {/**********/}
                    <Box className="chatbotFooter">
                      <Box className="inputChat">
                        <OutlinedInput
                          className="inputBorder"
                          placeholder="Escribe tu mensaje aquí..."
                        />
                      </Box>

                      <IconButton className="iconClip">
                        <IconClip />
                      </IconButton>

                      <IconButton className="iconSend btnGradientOrangeSquare">
                        <IconSend />
                      </IconButton>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  );
};

// BOTON COMPARTIR
export const BtnShare = () => {
  const { pathname } = useLocation();

  // OCULTAR EN TODOS, MENOS EN REVISTA
  if (pathname !== "/magazine") return null;

  return (
    <Fab disableTouchRipple className="btnFloat">
      <IconShare />
    </Fab>
  );
};
