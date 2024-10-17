import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

// IMPORTADOS
import "./customerService.scss";

const CustomerService = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box className="containerCustomerService">
      {/**************/}
      {/* PRE TITULO */}
      {/**************/}
      <Typography className="pretitle size16">SERVICIO DE ATENCIÓN</Typography>

      {/**********/}
      {/* TITULO */}
      {/**********/}
      <Typography className="title size60">¿Tienes dudas?</Typography>

      {/*******************/}
      {/* TIPO DE ESTUDIO */}
      {/*******************/}
      <FormControl className="selectWhite">
        <InputLabel id="demo-simple-select-label" className="size18">
          Tipo de estudio
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1} className="size18">
            Item 1
          </MenuItem>
        </Select>
      </FormControl>

      {/*******************/}
      {/* ÁREA DE INTERÉS */}
      {/*******************/}
      <FormControl className="selectWhite">
        <InputLabel id="demo-simple-select-label" className="size18">
          Área de interés
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1} className="size18">
            Item 1
          </MenuItem>
        </Select>
      </FormControl>

      {/********/}
      {/* PAÍS */}
      {/********/}
      <FormControl className="selectWhite">
        <InputLabel id="demo-simple-select-label" className="size18">
          País
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1} className="size18">
            Item 1
          </MenuItem>
        </Select>
      </FormControl>

      {/**********/}
      {/* CIUDAD */}
      {/**********/}
      <FormControl className="selectWhite">
        <InputLabel id="demo-simple-select-label" className="size18">
          Ciudad
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={1} className="size18">
            Item 1
          </MenuItem>
        </Select>
      </FormControl>

      {/*******************/}
      {/* NOMBRE COMPLETO */}
      {/*******************/}
      <OutlinedInput className="inputWhite" placeholder="Nombre completo" />

      {/**********************/}
      {/* CORREO ELECTRONICO */}
      {/**********************/}
      <OutlinedInput className="inputWhite" placeholder="Correo electrónico" />

      {/**************************/}
      {/* TERMINOS Y CONDICIONES */}
      {/**************************/}
      <FormControlLabel
        className="checkboxTerm"
        required
        label={
          <span className="size18">
            He leído y acepto la <strong>Política de Privacidad</strong>
          </span>
        }
        control={<Checkbox disableTouchRipple />}
      />

      {/*************************/}
      {/* SOLICITAR INFORMACION */}
      {/*************************/}
      <Button
        disableTouchRipple
        className="btnInfo btnGradientOrangeSquare size20"
      >
        <Typography className="size20">Solicitar información</Typography>
      </Button>
    </Box>
  );
};

export default CustomerService;
