/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from "@mui/material";
import { JSXElementConstructor, ReactElement } from "react";

// IMPORTADOS
import "./banner.scss";
import ImgBanner from "../../assets/images/bannerHome.png";

interface BannerProps {
  urlImage: string;
  title: string;
  description: string;
  complement?: ReactElement<any, string | JSXElementConstructor<any>>;
}

const Banner = ({
  urlImage = ImgBanner,
  title = "Titulo",
  description = "Descripcion",
  complement,
}: BannerProps) => {
  return (
    <Box className="containerBanner">
      {/*********/}
      {/* FONDO */}
      {/*********/}
      <Box className="imgBanner" sx={{ background: `url(${urlImage})` }} />

      {/********/}
      {/* INFO */}
      {/********/}
      <Box className="infoBanner">
        <Typography component={"h1"} className="size70">
          {title}
        </Typography>

        <Typography component={"h2"} className="size25">
          {description}
        </Typography>

        {/***************/}
        {/* COMPLEMENTO */}
        {/***************/}
        {complement}
      </Box>
    </Box>
  );
};

export default Banner;
