import { Divider, Paper, Stack, styled, Typography } from "@mui/material";

// IMPORTADOS
import "./counter.scss";
import { counterApi } from "../dataApi/DataApi";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  fontSize: "clamp(18px, 2dvw, 32px) !important",
  boxShadow: "none",
  color: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Counter = () => {
  return (
    <Stack
      className="counter"
      direction={{ xs: "column", sm: "row" }}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={{ xs: 1, sm: 2, md: 4, xl: 7 }}
    >
      {counterApi.map((item, index) => (
        <Item>
          <Typography
            component={"h1"}
            className="size70"
            sx={{
              color:
                index % 2
                  ? "var(--colorBlueDark) !important"
                  : "var(--colorOrange)",
            }}
          >
            {item.title}
          </Typography>

          <Typography className="size25">{item.description}</Typography>
        </Item>
      ))}
    </Stack>
  );
};

export default Counter;
