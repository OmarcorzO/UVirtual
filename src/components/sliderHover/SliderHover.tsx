/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

// IMPORTADOS
import "./sliderHover.scss";

// INTERFACE
interface SliderLevelProps {
  items: any[];
}

// IMPORTADOS
import "./sliderHover.scss";
import IconArrowLeft from "../../assets/icons/IconArrowLeft";
import IconArrowRight from "../../assets/icons/IconArrowRight";

const Sliders = ({ items }: SliderLevelProps) => {
  console.log(items)
  const [itemActive, setItemActive] = useState(0);
  const [translate, setTranslate] = useState(0);

  // MOVER SLIDER
  const handleChangeItem = (value: number) => {
    const box = document.querySelector("#containerSlider");
    const limit = Math.trunc(((box?.clientWidth ?? 0) - 330) / 190) + 1;

    if (value >= 0 && value < items.length) {
      setItemActive(value);
    }
    if (value <= items.length - limit && value >= 0) {
      setTranslate(-190 * value);
    }
  };

  return (
    <>
      {/********************/}
      {/* CONTENIDO SLIDER */}
      {/********************/}
      <Box className="sliderContent">
        {/**********/}
        {/* GRILLA */}
        {/**********/}
        <Grid
          container
          className="gridContainerSlider"
          sx={{
            transition: "0.5s",
            transform: `translateX(${translate}px)`,
          }}
        >
          {items
            ?.sort((a: any, b: any) => a.ordering - b.ordering)
            ?.map((item: any, index: number) => (
              <Grid item key={index}>
                {/***************/}
                {/* CARD SLIDER */}
                {/***************/}
                <Box
                  className={`cardSliderItem ${
                    itemActive === index && "cardSliderItemActive"
                  }`}
                  sx={{
                    backgroundImage: `url(${item.img ?? ""})`,
                    cursor: "pointer",
                  }}
                >
                  {/************************/}
                  {/* DEGRADADO DEL SLIDER */}
                  {/************************/}
                  <Box
                    className="gradientCardSlider"
                    sx={{
                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%)`,
                    }}
                  />

                  {/************************/}
                  {/* CONTENIDO DEL SLIDER */}
                  {/************************/}
                  <Box className="contentSlider">
                    <Typography className="titleSlider size30" component={"h1"}>
                      {item.title ?? ""}
                    </Typography>

                    <Box
                      className="contentTextSlider"
                      sx={{
                        display: itemActive === index ? "block" : "block",
                        transition: "1s !important",
                      }}
                    >
                      <Typography className="descriptionSlider size18">
                        {item.description}
                      </Typography>
                    </Box>

                    {/*********/}
                    {/* BOTON */}
                    {/*********/}
                    <Button disableTouchRipple className="btnCard size16" href={`${item.path}?${item.code}&${index}`}>
                      Explorar <IconArrowRight color="#fff" />
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>

      {/**********************/}
      {/* BOTON ATRAS SLIDER */}
      {/**********************/}
      <Button
        disableTouchRipple
        disabled={itemActive === 0 ? true : false}
        className={`btnSlider ${
          itemActive === 0 ? "btnSliderActive" : "btnSliderDisabled"
        }`}
        onClick={() => handleChangeItem(itemActive - 1)}
        sx={{
          marginRight: "20px",
          ">svg>g>path": {
            stroke: itemActive === 0 ? "#ADA4B7" : "#ffffff",
          },
        }}
      >
        <IconArrowLeft />
      </Button>

      {/**************************/}
      {/* BOTON SIGUIENTE SLIDER */}
      {/**************************/}
      <Button
        disableTouchRipple
        disabled={itemActive === items.length - 1 ? true : false}
        className={`btnSlider ${
          itemActive === items.length - 1
            ? "btnSliderActive"
            : "btnSliderDisabled"
        }`}
        onClick={() => handleChangeItem(itemActive + 1)}
        sx={{
          ">svg>path": {
            fill: itemActive === items.length - 1 ? "#ADA4B7" : "#ffffff",
          },
        }}
      >
        <IconArrowRight width="24px" height="24px" />
      </Button>
    </>
  );
};

export default Sliders;
