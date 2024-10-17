import { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";

// IMPORTADOS
import "./drawerContent.scss";
import AcademicOffer from "./tabs/AcademicOffer";
import Services from "./tabs/Services";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      className="viewTab"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const tabs = [
  { value: 1, path: 'about-us' },
  { value: 3, path: 'teaching-staff' },
  { value: 5, path: 'contact-us' },
];

const DrawerContent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    const selectedTab = tabs.find(tab => tab.value === newValue);
    if (selectedTab?.path !== undefined) {
      window.location.href = selectedTab.path;
    } else {
      setValue(newValue);
    }
  };

  return (
    <Box className="drawerContent">
      <Box
        className="containerTab"
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          // height: 224,
        }}
      >
        <Tabs
          className="contentTabs"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Oferta académica" {...a11yProps(0)} disableTouchRipple />
          <Tab label="Sobre UVirtual" {...a11yProps(1)} disableTouchRipple />
          <Tab label="Business" {...a11yProps(2)} disableTouchRipple />
          <Tab label="Claustro docente" {...a11yProps(3)} disableTouchRipple />
          <Tab label="Servicios" {...a11yProps(4)} disableTouchRipple />
          <Tab label="Contáctanos" {...a11yProps(5)} disableTouchRipple />

          <Box className="btnsNoTab">
            {/**********************/}
            {/* BOTON AULA VIRTUAL */}
            {/**********************/}
            <Button
              disableTouchRipple
              className="btnGradientOrangeSquare size18"
            >
              Aula Virtual
            </Button>

            {/*************************/}
            {/* BOTON TEST VOCACIONAL */}
            {/*************************/}
            <Button
              disableTouchRipple
              className="btnGradientOrangeSquare size18"
            >
              Test Vocacional
            </Button>
          </Box>
        </Tabs>

        {/********************/}
        {/* OFERTA ACADEMICA */}
        {/********************/}
        <TabPanel value={value} index={0}>
          <AcademicOffer />
        </TabPanel>

        {/******************/}
        {/* SOBRE UVIRTUAL */}
        {/******************/}
        <TabPanel value={value} index={1}>
          Sobre UVirtual
        </TabPanel>

        {/************/}
        {/* BUSINESS */}
        {/************/}
        <TabPanel value={value} index={2}>
          Business
        </TabPanel>

        {/*************/}
        {/* CLAUSTRO DOCENTE */}
        {/*************/}
        <TabPanel value={value} index={3}>
          Claustro Docente
        </TabPanel>

        {/*************/}
        {/* SERVICIOS */}
        {/*************/}
        <TabPanel value={value} index={4}>
          <Services />
        </TabPanel>

        {/***************/}
        {/* CONTACTANOS */}
        {/***************/}
        {/* <TabPanel value={value} index={5}>
          Contáctanos
        </TabPanel> */}
      </Box>
    </Box>
  );
};

export default DrawerContent;
