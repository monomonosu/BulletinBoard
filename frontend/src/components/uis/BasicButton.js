import { styled, Button } from "@mui/material";

const BasicButton = (props) => {
  const CustomButton = styled(Button)({
    height: "40px",
    width: "16%",
    borderColor: "white",
    borderRadius: "0px",
    color: "white",
    "& .MuiButtonBase-root": {
      borderColor: "white",
    },
    "&:hover": {
      borderColor: "white",
    },
  });

  const buttonText = props.buttonText;
  const onClick = props.onClick;
  return (
    <>
      <CustomButton variant="outlined" onClick={onClick}>
        {buttonText}
      </CustomButton>
    </>
  );
};

export default BasicButton;
