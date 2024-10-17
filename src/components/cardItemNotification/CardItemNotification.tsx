import { Button, Grid, Typography } from "@mui/material";

// IMPORTADOS
import "./cardItemNotification.scss";
import IconArrowRight from "../../assets/icons/IconArrowRight";

interface CardItemNotificationProps {
  title: string;
  description: string;
  navigate: string;
  titleBtn?: string;
}

const CardItemNotification = ({
  title,
  description,
  navigate,
  titleBtn = "Explorar",
}: CardItemNotificationProps) => {
  return (
    <Grid item xs={12} lg={5.6} className="cardItemNotification">
      {/**********/}
      {/* TITULO */}
      {/**********/}
      <Typography className="titleCard">{title}</Typography>

      {/***************/}
      {/* DESCRIPTION */}
      {/***************/}
      <Typography className="descriptionCard size18">{description}</Typography>

      {/*********/}
      {/* BOTON */}
      {/*********/}
      <Button disableTouchRipple className="btnCard size16" href={navigate}>
        {titleBtn} <IconArrowRight />
      </Button>
    </Grid>
  );
};

export default CardItemNotification;
