import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";

// IMPORTADOS
import "./microcertifications.scss";
import IconArrowUpRight from "../../../../../assets/icons/IconArrowUpRight";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  fontSize: "clamp(18px, 2dvw, 32px) !important",
  boxShadow: "none",
  textAlign: "center",
  color: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Microcertifications = () => {
  return (
    <Box className="containerMicrocertifications">
      {/*************/}
      {/* PRETITULO */}
      {/*************/}
      <Typography component={"h3"} className="size16">
        PREPARARSE NUNCA FUE MÁS FÁCIL
      </Typography>

      {/**********/}
      {/* TITULO */}
      {/**********/}
      <Typography component={"h1"} className="size60">
        Microcertificaciones
      </Typography>

      {/***************/}
      {/* DESCRIPTION */}
      {/***************/}
      <Typography className="size25">
        Nuestras microcertificaciones permiten centrarse en áreas técnicas o
        habilidades prácticas en sectores como la tecnología, el marketing
        digital, la gestión de proyectos, entre otros.
      </Typography>

      {/******************/}
      {/* CARATERISTICAS */}
      {/******************/}
      <Stack
        className="characteristicss"
        direction={{ xs: "column", sm: "row" }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 1, sm: 2, md: 4, xl: 6 }}
        height={{ xs: "auto", sm: "113px" }}
      >
        <Item>Flexibilidad</Item>
        <Item>Reconocimiento inmediato</Item>
        <Item>Enfoque práctico</Item>
        <Item>Asequible</Item>
      </Stack>

      {/*********/}
      {/* BOTON */}
      {/*********/}
      <Button
        disableTouchRipple
        className="btnInfo btnGradientOrangeCircle size16"
        href="courses"
      >
        EXPLORAR nuestras microcertificaciones <IconArrowUpRight />
      </Button>
    </Box>
  );
};

export default Microcertifications;
