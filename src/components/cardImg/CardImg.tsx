import { Box } from "@mui/material";

// IMPORTADOS
import img1 from "../../assets/images/magazineThinkAndManage.png";

interface CardImgProps {
  img?: string;
}

const CardImg = ({ img = img1 }: CardImgProps) => {
  return (
    <Box
      className="cardImg"
      sx={{
        // background: `url(${img}) lightgray 50% / cover no-repeat`,
        width: "100%",
        maxWidth: "395px",
        height: "500px",
        ">.imgCard": {
          width: "100%",
          height: "100%",
          borderRadius: "20px",
        },
      }}
    >
      <Box
        className="imgCard"
        sx={{ background: `url(${img}) lightgray 50% / cover no-repeat` }}
      />
    </Box>
  );
};

export default CardImg;
