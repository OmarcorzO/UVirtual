import { Box, Stack, Typography } from "@mui/material";

// IMPORTADOS
import Banner from "../../../components/banner/Banner";
import ImgBanner from "../../../assets/images/bannerAboutUs.png";
import Counter from "../../../components/counter/Counter";
import CardInfo from "../../../components/cardInfo/CardInfo";
import imgInnovacion from "../../../assets/images/imgInnovacion.png";
import imgFlexPerson from "../../../assets/images/imgFlexPerson.png";
import IconAcademicExcellence from "../../../assets/icons/IconAcademicExcellence";
import IconAccessibility from "../../../assets/icons/IconAccessibility";
import IconInnovation from "../../../assets/icons/IconInnovation";
import IconComputer from "../../../assets/icons/IconComputer";
import IconHand from "../../../assets/icons/IconHand";
import IconInclusion from "../../../assets/icons/IconInclusion";
import IconUVirtualWhite from "../../../assets/icons/IconUVirtualWhite";
import IconMisionVision from "../../../assets/icons/IconMisionVision";
import CustomerService from "../../../components/customerService/CustomerService";

const AboutUs = () => {
  return (
    <Box>
      {/**********/}
      {/* BANNER */}
      {/**********/}
      <Banner
        urlImage={ImgBanner}
        title="En UVirtual estamos comprometidos con la educación superior."
        description="Somos una universidad global de educación superior comprometida con la excelencia académica y la formación integral de sus estudiantes. Desarrollamos experiencias de aprendizaje flexible, práctico y útil para todos y todas. En UVirtual creemos en la importancia de la educación como un motor de transformación social y personal."
      />

      {/********/}
      {/* MAIN */}
      {/********/}
      <Box className="mainContent">
        {/***********************/}
        {/* STACK MISION/VISION */}
        {/***********************/}
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction={{ xs: "column", lg: "row" }}
          justifyContent={"center"}
          useFlexGap
        >
          <Box display={"grid"} gap={{ xs: 1, sm: 2 }}>
            {/**********/}
            {/* MISIÓN */}
            {/**********/}
            <CardInfo
              icon={<IconMisionVision />}
              title="Nuestra Misión"
              description="En UVirtual, nuestra misión es proporcionar una educación superior de calidad, accesible y flexible, que empodere a individuos de todo el mundo para alcanzar sus metas académicas y profesionales. Estamos dedicados a romper las barreras tradicionales de la educación superior y a construir un futuro donde el conocimiento y la oportunidad estén al alcance de todos, en cualquier lugar."
              maxWidth="967px"
            />

            {/**********/}
            {/* MISIÓN */}
            {/**********/}
            <CardInfo
              icon={<IconMisionVision color="#fff" />}
              title="Nuestra Visión"
              description="En UVirtual, nuestra visión es trascender las limitaciones tradicionales de la educación superior y aspiramos a ser líderes globales en la revolución de la educación virtual, redefiniendo el paradigma educativo y creando un espacio donde el aprendizaje sea una experiencia globalmente accesible, personalizada e inspiradora que impulse el desarrollo humano y el progreso de la sociedad."
              maxWidth="967px"
              background={`var(--colorBlueLight)`}
              colorTitle="#fff"
              colorDescription="#fff"
            />
          </Box>

          <Box display={"contents"}>
            {/*********/}
            {/* ICONO */}
            {/*********/}
            <Box
              maxWidth={{ xs: "-webkit-fill-available", lg: "524px" }}
              sx={{
                background: `linear-gradient(94deg, #FFA600 0%, #E95D0F 100%)`,
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.15)",
                display: "flex",
                width: "-webkit-fill-available",
                height: "-webkit-fill-available",
                maxHeight: "100%",
                borderRadius: "20px",
                textAlign: "left",
                padding: "50px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <IconUVirtualWhite />
            </Box>
          </Box>
        </Stack>

        {/***********/}
        {/* COUNTER */}
        {/***********/}
        <Counter />

        {/********************/}
        {/* CONTAINER STACKS */}
        {/********************/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/***************************/}
          {/* TITULO NUESTROS VALORES */}
          {/***************************/}
          <Typography
            className="size54"
            sx={{
              color: "#0A3D96",
              lineHeight: "110%" /* 59.4px */,
              textAlign: "center",
              marginBottom: "34px",
            }}
          >
            Nuestros valores
          </Typography>

          {/***********/}
          {/* STACK 1 */}
          {/***********/}
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction={{ xs: "column", lg: "row" }}
            justifyContent={"center"}
            useFlexGap
          >
            {/************************/}
            {/* EXCELENCIA ACADEMICA */}
            {/************************/}
            <CardInfo
              icon={<IconAcademicExcellence />}
              title="Excelencia Académica"
              description="Compromiso con la calidad en la enseñanza, evaluación y desarrollo de programas académicos que fomenten el máximo rendimiento y aprendizaje de los estudiantes."
              maxWidth="967px"
            />

            {/*****************/}
            {/* ACCESIBILIDAD */}
            {/*****************/}
            <CardInfo
              icon={<IconAccessibility />}
              title="Accesibilidad"
              description="Garantizar que la educación superior sea accesible para todos y todas, sin importar la ubicación geográfica, situación económica o limitaciones físicas."
              maxWidth="967px"
              background="var(--colorOrange)"
              colorTitle="#ffffff"
              colorDescription="#ffffff"
            />

            {/**************/}
            {/* INNOVACIÓN */}
            {/**************/}
            <CardInfo
              icon={<IconInnovation />}
              title="Innovación"
              description="Promover un ambiente donde la creatividad y la innovación educativa sean constantemente fomentadas, integrando tecnologías emergentes y métodos pedagógicos avanzados."
              maxWidth="967px"
              background={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(${imgInnovacion}) lightgray 50% / cover no-repeat`}
              colorTitle="#ffffff"
              colorDescription="#ffffff"
            />
          </Stack>

          {/***********/}
          {/* STACK 2 */}
          {/***********/}
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction={{ xs: "column", lg: "row" }}
            justifyContent={"center"}
            useFlexGap
          >
            <Box>
              {/**********************************/}
              {/* FLEXIBILIDAD Y PERSONALIZACIÓN */}
              {/**********************************/}
              <CardInfo
                icon={<IconComputer />}
                title="Flexibilidad y Personalización."
                description="Trabajamos para ofrecer un ambiente educativo ajustable a las necesidades de los estudiantes, promoviendo la autonomía y autodirección personalizada de su trayectoria académica."
                maxWidth="524px"
                display="flex"
                background={`linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(${imgFlexPerson}) lightgray 50% / cover no-repeat`}
                colorTitle="#fff"
                colorDescription="#fff"
              />
            </Box>

            <Box display={"grid"} gap={{ xs: 1, sm: 2 }}>
              {/**************************/}
              {/* RESPONSABILIDAD SOCIAL */}
              {/**************************/}
              <CardInfo
                icon={<IconHand />}
                title="Responsabilidad social"
                description="Inspirar a los estudiantes para que se conviertan en ciudadanos responsables, éticos y comprometidos con el impacto positivo en la sociedad."
                maxWidth="967px"
              />
              {/**************************/}
              {/* DIVERSIDAD E INCLUSIÓN */}
              {/**************************/}
              <CardInfo
                icon={<IconInclusion />}
                title="Diversidad e inclusión"
                description="Fomentar un entorno inclusivo que celebre la diversidad de perspectivas, antecedentes culturales y experiencias, creando una comunidad global conectada."
                maxWidth="967px"
                background={`var(--colorBlueLight)`}
                colorTitle="#fff"
                colorDescription="#fff"
              />
            </Box>
          </Stack>
        </Box>

        {/************************/}
        {/* SERVICIO DE ATENCIÓN */}
        {/************************/}
        <CustomerService />
      </Box>
    </Box>
  );
};

export default AboutUs;
