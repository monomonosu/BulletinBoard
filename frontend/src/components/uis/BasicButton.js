import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const BasicButton = (props) => {
  const CustomButton = styled(Button)({
    height: "40px",
    width: "16%",
    borderColor: "white",
    borderRadius: "0px",
    color: "white",
    "&:hover": {
      borderColor: "white",
    },
    "&.-green": {
      borderColor: "#5f6900",
      color: "#5f6900",
      "&:hover": {
        borderColor: "#5f6900",
      },
    },
    "&.-blue": {
      borderColor: "#003b4d",
      color: "#003b4d",
      "&:hover": {
        borderColor: "#003b4d",
      },
    },
  });

  const buttonText = props.buttonText;
  const onClick = props.onClick;
  const className = props.className;
  return (
    <>
      <CustomButton className={className} variant="outlined" onClick={onClick}>
        {buttonText}
      </CustomButton>
    </>
  );
};

export default BasicButton;
