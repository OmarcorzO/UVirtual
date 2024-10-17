import { Navigate, useRoutes } from "react-router-dom";

// IMPORTADOS
import Layout from "../layouts/Layout";
import Home from "../pages/private/home/Home";
import Login from "../pages/public/login/Login";
import SignUp from "../pages/public/signUp/SignUp";
import AboutUs from "../pages/private/aboutUs/AboutUs";
import OnlinePayment from "../pages/private/onlinePayments/OnlinePayments";
import DetailsProgram from "../pages/private/detailsProgram/DetailsProgram";
import DetailsCourse from "../pages/private/detailsCourse/DetailsCourse";
import Undergraduate from "../pages/private/undergraduate/Undergraduate";
import Doctorate from "../pages/private/doctorate/Doctorate";
import ContactUs from "../pages/private/contactUs/ContactUs";
import TeachingStaff from "../pages/private/teachingStaff/TeachingStaff";
import Magazine from "../pages/private/magazine/Magazine";

const AppRoutes = () => {
  const routes = useRoutes([
    // FALTA VALIDAR RUTA DE INICIO
    {
      path: "",
      element: <Navigate to={'home'} />
    },
    // LOGIN
    {
      path: "login",
      element: <Login />,
    },
    // SIGN-UP
    {
      path: "sign-up",
      element: <SignUp />,
    },
    // LAYOUT
    {
      path: "",
      element: <Layout />,
      children: [
        // LANDING
        {
          path: "landing",
          element: <Home />,
        },
        // HOME
        {
          path: "home",
          element: <Home />,
        },
        // SOBRE NOSOTROS
        {
          path: "about-us",
          element: <AboutUs />,
        },
        // PAGOS ONLINE
        {
          path: "online-payment",
          element: <OnlinePayment />,
        },
        // DETALLES DEL PROGRAMA
        {
          path: "details-program",
          element: <DetailsProgram />,
        },
        // DETALLES DEL CURSO
        {
          path: "details-course",
          element: <DetailsCourse />,
        },
        // GRADUADOS
        {
          path: "undergraduate",
          element: <Undergraduate />,
        },
        // DOCTORADOS
        {
          path: "doctorate",
          element: <Doctorate />,
        },
        // CONTACTANOS
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        // CLAUSTRO DOCENTE
        {
          path: "teaching-staff",
          element: <TeachingStaff />,
        },
        // REVISTA
        {
          path: "magazine",
          element: <Magazine />,
        },
      ],
    },
  ]);

  return routes;
};

export default AppRoutes;
