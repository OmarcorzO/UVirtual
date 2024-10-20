import { Box, Stack, Typography } from "@mui/material";

// IMPORTADOS
import "./reasonToStudy.scss";
import Counter from "../../../../../components/counter/Counter";
import CardInfo from "../../../../../components/cardInfo/CardInfo";
import img1 from "../../../../../assets/images/imgGrandpa.png";
import IconGraduate from "../../../../../assets/icons/IconGraduate";
import IconTeacher from "../../../../../assets/icons/IconTeacher";
import AnimatedContainer from "../../../../../components/animatedContainer/AnimatedContainer";

const ReasonToStudy = () => {
  return (
    <Box className="containerReasonToStudy">
      <Typography component={"h3"} className="pretitleRTS size16">
        ¿Por qué estudiar en UVirtual?
      </Typography>

      <Typography component={"h1"} className="titleRTS size60">
        Somos una universidad interesada en tú <b>futuro profesional.</b>
      </Typography>

      {/***********/}
      {/* COUNTER */}
      {/***********/}
      <Counter />

      {/*********/}
      {/* STACK */}
      {/*********/}
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction={{ xs: "column", lg: "row" }}
        justifyContent={"center"}
        useFlexGap
      >
        <Box display={"grid"} gap={{ xs: 1, sm: 2 }}>
          {/*******************************/}
          {/* METODOLOGÍA ONLINE FLEXIBLE */}
          {/*******************************/}
          <AnimatedContainer animationType="fadeInLeft">
            <CardInfo
              title="Metodología online flexible"
              description="Con nuestra metodología en línea flexible, el aprendizaje se adapta a tu vida, no al revés. Aprovecha la libertad de estudiar cuando y donde quieras, para alcanzar tus objetivos educativos sin comprometer tu estilo de vida."
              maxWidth="967px"
            />
          </AnimatedContainer>
          {/***********************************/}
          {/* GRADÚATE CON TITULO PROFECIONAL */}
          {/***********************************/}
          <AnimatedContainer animationType="fadeInLeft" time={1.5}>
            <CardInfo
              icon={<IconGraduate />}
              title="Gradúate con título profesional."
              description="Gradúate con un título profesional que te abrirá puertas ilimitadas de oportunidades en el mundo profesional. En UVirtual, te ayudamos a forjar un camino brillante hacia el éxito y el logro de tus metas profesionales."
              maxWidth="967px"
              background={`var(--colorBlueLight)`}
              colorTitle="#fff"
              colorDescription="#fff"
            />
          </AnimatedContainer>
        </Box>

        <AnimatedContainer animationType="fadeInRight" time={2}>
          {/* <Box> */}
          {/***********************************/}
          {/* DOCENTES CAPACITADOS Y EXPERTOS */}
          {/***********************************/}
          <CardInfo
            icon={<IconTeacher />}
            title="Docentes capacitados y expertos."
            description="Nuestros docentes, altamente capacitados y con experiencia, son el corazón de la excelencia educativa. Con su guía experta, te brindarán las herramientas y conocimientos necesarios para alcanzar tus metas académicas y profesionales."
            maxWidth="713px"
            display="flex"
            background={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(${img1}) lightgray 50% / cover no-repeat`}
            colorTitle="#fff"
            colorDescription="#fff"
          />
          {/* </Box> */}
        </AnimatedContainer>
      </Stack>
    </Box>
  );
};

export default ReasonToStudy;
