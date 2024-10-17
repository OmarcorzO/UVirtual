/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { JSXElementConstructor, ReactElement } from "react";

// IMPORTADOS
import "./cardInfo.scss";
import IconOnline from "../../assets/icons/IconOnline";

interface CardInfoProps {
  icon?: ReactElement<any, string | JSXElementConstructor<any>>;
  title?: string;
  description?: string;
  background?: string;
  maxWidth?: string;
  boxShadow?: string;
  display?: string;
  colorTitle?: string;
  colorDescription?: string;
}

const CardInfo = ({
  icon = <IconOnline />,
  title = "Titulo",
  description = "Descripción",
  background = "#fff",
  maxWidth = "100%",
  boxShadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
  display = "block",
  colorTitle = "var(--colorBlueLight)",
  colorDescription = "var(--colorGrey)",
}: CardInfoProps) => {
  return (
    <Box
      className="containerCardInfo"
      maxWidth={{ xs: "-webkit-fill-available", lg: maxWidth }}
      sx={{
        background: `${background}`,
        boxShadow: { boxShadow },
        display: { display },
      }}
    >
      {/*********/}
      {/* ICONO */}
      {/*********/}
      {icon}

      {/**********/}
      {/* TITULO */}
      {/**********/}
      <Typography
        component={"h3"}
        className="titleCardInfo size25"
        sx={{ color: `${colorTitle}` }}
      >
        {title}
      </Typography>

      {/***************/}
      {/* DESCRIPTION */}
      {/***************/}
      <Typography
        className="descriptionCardInfo size20"
        sx={{ color: `${colorDescription}` }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default CardInfo;
