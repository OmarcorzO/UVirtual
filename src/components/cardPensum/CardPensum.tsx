import { Box, Divider, Paper, Stack, styled, Typography } from "@mui/material";

// IMPORTADOS
import "./cardPensum.scss";

interface CardPensumProps {
  img?: string;
  title?: string;
  description?: string;
  path: string;
  course?: string;
  state?: string;
  time?: string;
  dateFirst?: string;
  dateLast?: string;
  value?: string;
  footer?: string;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  fontSize: "clamp(18px, 2dvw, 32px) !important",
  boxShadow: "none",
  color: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const CardPensum = ({
  img,
  title,
  description,
  path,
  course,
  state,
  time,
  dateFirst,
  dateLast,
  value,
  footer
}: CardPensumProps) => {
  return (
    <Box className="contentCardPensum">
      {/**********/}
      {/* IMAGEN */}
      {/**********/}
      <Box className="img" sx={{ background: `url(${img})` }} />

      {/***************/}
      {/* INFORMACION */}
      {/***************/}
      <Box className="info">
        {/**********/}
        {/* TITULO */}
        {/**********/}
        <Typography className="title size25">{title}</Typography>

        {/***************/}
        {/* DESCRIPTION */}
        {/***************/}
        <Typography className="description size16">
          {description} <a href={path}>Ver más</a> 
        </Typography>

        {/*****************/}
        {/* DATOS CARRERA */}
        {/*****************/}
        <Stack
          className="counter stackInfo"
          direction={{ xs: "column", sm: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2 }}
        >
          <Item>
            <Typography className="size16">{course}</Typography>
          </Item>
          <Item>
            <Typography className="size16">{state}</Typography>
          </Item>
          <Item>
            <Typography className="size16" sx={{ textWrap: "nowrap" }}>
              {time}
            </Typography>
          </Item>
        </Stack>

        {/*****************/}
        {/* FECHA CARRERA */}
        {/*****************/}
        <Stack
          className="counter stackInfo"
          direction={{ xs: "column", sm: "row" }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2 }}
        >
          <Item>
            <Typography className="size16" sx={{ textWrap: "nowrap" }}>
              Inicio: {dateFirst}
            </Typography>
          </Item>
          <Item>
            <Typography className="size16" sx={{ textWrap: "nowrap" }}>
              Fin: {dateLast}
            </Typography>
          </Item>
        </Stack>
      </Box>

      {/*********/}
      {/* VALOR */}
      {/*********/}
      <Box className="value">
        <Typography className="size25">${value}</Typography>
        <Typography className="size16">{footer}</Typography>
      </Box>
    </Box>
  );
};

export default CardPensum;
