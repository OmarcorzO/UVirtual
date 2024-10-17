import { Box, Grid } from "@mui/material";

// IMPORTADOS
import { cardItemNotificationApi } from "../../../../components/dataApi/DataApi";
import CardItemNotification from "../../../../components/cardItemNotification/CardItemNotification";

const AcademicOffer = () => {
  return (
    <Box>
      <Grid container gap={4}>
        {cardItemNotificationApi.map((item, index) => (
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

export default AcademicOffer;
