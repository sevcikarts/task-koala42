import { Button as MUIButton, ButtonProps } from "@mui/material";
import { FC } from "react";
import { greenColor, textLightColor } from "../../constants";

const Button: FC<ButtonProps> = (props) => {
  return (
    <MUIButton
      sx={{
        bgcolor: greenColor,
        color: textLightColor,
        minWidth: "40px",
        borderRadius: 5,
        "&:hover": {
          backgroundColor: "red",
        },
      }}
      {...props}
    />
  );
};

export default Button;
