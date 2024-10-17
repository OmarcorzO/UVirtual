import { Box, Grid } from "@mui/material";

// IMPORTADOS
import { cardItemServices } from "../../../../components/dataApi/DataApi";
import CardItemNotification from "../../../../components/cardItemNotification/CardItemNotification";

const Services = () => {
  return (
    <Box>
      <Grid container gap={4}>
        {cardItemServices.map((item, index) => (
          <CardItemNotification
            key={index}
            title={item.title}
            description={item.description}
            navigate={item.view}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Services;