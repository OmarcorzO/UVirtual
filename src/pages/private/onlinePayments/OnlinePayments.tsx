import { Box, Typography } from "@mui/material";

// IMPORTADOS
import Banner from "../../../components/banner/Banner";
import ImgBanner from "../../../assets/images/bannerOnlinePayments.png";
import MiniCards from "../../../components/miniCards/MiniCards";

const OnlinePayment = () => {
  return (
    <Box>
      {/**********/}
      {/* BANNER */}
      {/**********/}
      <Banner
        urlImage={ImgBanner}
        title="Realizar tus pagos es más fácil de lo que crees."
        description="Nos dedicamos a proporcionarte una experiencia sin complicaciones, ofreciendo transparencia y eficiencia en todo el proceso. Por esta razón, te invitamos a explorar la conveniencia y facilidad al efectuar el pago de tu matrícula en línea. ¡Con nosotros, realiza tus transacciones de manera ágil y segura! "
      />

      {/********/}
      {/* MAIN */}
      {/********/}
      <Box className="mainContent">
        {/***********/}
        {/* TITULOS */}
        {/***********/}
        <Box
          sx={{
            ">.pretitle": {
              color: "var(--colorBlueDark)",
              letterSpacing: "4px",
              textTransform: "uppercase",
            },
            ">.title": {
              color: "var(--colorBlueDark)",
              letterSpacing: "4px",
              ineHeight: "120%" /* 72px */,
            },
          }}
        >
          {/**************/}
          {/* PRE TITULO */}
          {/**************/}
          <Typography className="pretitle size16">MEDIOS DE PAGO</Typography>

          {/**********/}
          {/* TITULO */}
          {/**********/}
          <Typography className="title size60">
            Nuestros medios de pago
          </Typography>
        </Box>

        {/****************************/}
        {/* TARJETA DEBITO O CREDITO */}
        {/****************************/}
        <MiniCards title="Tarjeta de débito o crédito" />

        {/****************************/}
        {/* TARJETA DEBITO O CREDITO */}
        {/****************************/}
        <MiniCards title="Débito bancario" />

        {/****************************/}
        {/* TARJETA DEBITO O CREDITO */}
        {/****************************/}
        <MiniCards title="Pago en bancos" />

        {/****************************/}
        {/* TARJETA DEBITO O CREDITO */}
        {/****************************/}
        <MiniCards title="Otras formas de pago" />
      </Box>
    </Box>
  );
};

export default OnlinePayment;
