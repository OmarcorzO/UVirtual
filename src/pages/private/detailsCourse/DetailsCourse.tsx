import { Box, Typography } from "@mui/material";

// IMPORTADOS
import "./detailsCourse.scss";
import Banner from "../../../components/banner/Banner";
import ImgBanner from "../../../assets/images/bannerDetailsCourse.png";
import SectionsCourse from "./componentCourse/SectionsCourse";
import FrecuentlyQuestion from "./componentCourse/FrecuentlyQuestion/FrecuentlyQuestion";
import SliderCommit from "../../../components/sliderCommit/SliderCommit";
import { pensumCourses } from "../../../components/dataApi/DataApi";

const DetailsCourse = () => {
  const code = window.location.search.split(/[?]|[&]/)[1];
  const pos = parseInt(window.location.search.split(/[?]|[&]/)[2]);

  return (
    <Box>
      {/**********/}
      {/* BANNER */}
      {/**********/}
      <Banner
        urlImage={ImgBanner}
        title={pensumCourses[pos].title}
        description={pensumCourses[pos].description}
      />

      {/********/}
      {/* MAIN */}
      {/********/}
      <Box className="mainContent">
        {/*********************/}
        {/* SECTION DEL CURSO */}
        {/*********************/}
        <SectionsCourse posData={pos} />

        {/*******************/}
        {/* SLIDER COMPLETO */}
        {/*******************/}
        <SliderCommit />

        {/**************/}
        {/* CARTA NOTA */}
        {/**************/}
        <Box className="cardNote">
          <Typography className="titleCardNote size60">
            Comienza de inmediato para obtener tu certificado
          </Typography>

          <Typography className="descriptionCardNote size25">
            Cuando completes este certificado profesional, podrás agregarlo a tu
            perfil de LinkedIn o a tu currículum vitae y así, obtener un sinfin
            de oportunidades laborales.
          </Typography>
        </Box>

        {/************************/}
        {/* PREGUNTAS FRECUENTES */}
        {/************************/}
        <FrecuentlyQuestion />
      </Box>
    </Box>
  );
};

export default DetailsCourse;
