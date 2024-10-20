import { SetStateAction, useState } from "react";
import { Box, IconButton, Rating, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

// IMPORTADOS
import "./sliderCommit.scss";
import { imgSlyderComplete } from "../dataApi/DataApi";

const SliderCommit = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [value, setValue] = useState<number | null>(5);

  // NAVEGAR ATRAS
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgSlyderComplete.length);
  };

  // NAVEGAR SIGUIENTE
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + imgSlyderComplete.length) % imgSlyderComplete.length
    );
  };

  // EL DOT DEL PAGINADOR
  const handleDotClick = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <Box className="containerSliderCommit">
      {/********************/}
      {/* CONTENIDO SLIDER */}
      {/********************/}
      <Box width="100%" height="100%">
        <Typography className="commit size32">
          {imgSlyderComplete[currentIndex].quote}
        </Typography>

        {/**********/}
        {/* IMAGEN */}
        {/**********/}
        <Box
          className="profileCommit"
          component="img"
          src={imgSlyderComplete[currentIndex].image}
          alt={`Image ${currentIndex + 1}`}
          width="100px"
          height="100px"
          style={{ objectFit: "cover" }}
        />

        <br />

        {/*************/}
        {/* ESTRELLAS */}
        {/*************/}
        <Rating
          name="simple-controlled"
          value={imgSlyderComplete[currentIndex].rating}
          readOnly
        />

        <Typography className="name size25">
          {imgSlyderComplete[currentIndex].name}
        </Typography>
        <Typography className="profession size20">
          {imgSlyderComplete[currentIndex].profession}
        </Typography>
      </Box>

      {/********************/}
      {/* FLECHA IZQUIERDA */}
      {/********************/}
      <IconButton disableTouchRipple className="arrowLeft" onClick={handlePrev}>
        <ArrowBack />
      </IconButton>

      {/******************/}
      {/* FLECHA DERECHA */}
      {/******************/}
      <IconButton
        disableTouchRipple
        className="arrowRight"
        onClick={handleNext}
      >
        <ArrowForward />
      </IconButton>

      {/**************/}
      {/* PAGINACION */}
      {/**************/}
      <Box display="flex" justifyContent="center" marginTop={2}>
        {imgSlyderComplete.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor:
                currentIndex === index ? "var(--colorBlueDark)" : "#D9D9D9",
              margin: "0 5px",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SliderCommit;
