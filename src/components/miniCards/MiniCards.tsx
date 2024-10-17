import { Box, Paper, Stack, styled, Typography } from "@mui/material";

// ITEMS
const Item = styled(Paper)(() => ({
  backgroundColor: "var(--colorGrey)",
  textAlign: "center",
  flexGrow: 1,
  maxWidth: "200px",
  height: "100px",
  borderRadius: "10px",
}));

interface MiniCardsProps {
  title?: string;
}

const MiniCards = ({ title = "Titulo" }: MiniCardsProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: "40px",
        ">p": {
          color: "var(--colorBlueDark)",
          fontWeight: 500,
          lineHeight: "120%" /* 30px */,
        },
      }}
    >
      {/**********/}
      {/* TITULO */}
      {/**********/}
      <Typography className="size25">{title}</Typography>

      {/*********/}
      {/* ITEMS */}
      {/*********/}
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap" }}
      >
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Stack>
    </Box>
  );
};

export default MiniCards;
