import { Box } from "@mui/material";

// IMPORTADOS
import img1 from "../../assets/images/magazineThinkAndManage.png";

interface CardImgProps {
  img?: string;
  url?: string;
}

const CardImg = ({ img = img1, url }: CardImgProps) => {
  return (
    <Box
      onClick={() => window.open(url, '_blank')}
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
        cursor: 'pointer'
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
