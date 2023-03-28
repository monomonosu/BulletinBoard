import axios from "axios";
import TextField from "@mui/material/TextField";
import BasicButton from "./uis/BasicButton";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material";
import emStyled from "@emotion/styled";
import { useRouter } from "next/router";

const CreateThreadForm = () => {
  const CustomFormContainer = emStyled.div`
    text-align: left;
    margin: 0 20px;
    box-sizing:border-box;
    width: auto;
    display:grid;
    gap:20px
    `;

  const FormInner = emStyled.div`
    display:flex;
    gap:2%;
  `;

  const CustomTextField = styled(TextField)({
    width: "40%",
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      borderRadius: "0px",
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });

  const OverRideTextField = styled(CustomTextField)({
    width: "100%",
  });

  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    createThread(data);
    reset((formValues) => ({
      ...formValues,
      name: "",
      email: "",
      title: "",
      content: "",
    }));
  };

  // フォーム内容送信
  const createThread = async (param) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/threads`, param)
      .then((res) => {
        alert("スレッドを作成しました");
        router.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <CustomFormContainer>
      <FormInner>
        <CustomTextField
          id={`name`}
          name="name"
          type="text"
          size="small"
          label="名前"
          {...register("name")}
        />
        <CustomTextField
          id={`email`}
          name="email"
          type="text"
          size="small"
          label="メールアドレス"
          {...register("email")}
        />
        <BasicButton buttonText="書込" onClick={handleSubmit(onSubmit)} />
      </FormInner>
      <OverRideTextField
        id={`title`}
        name="title"
        type="text"
        size="small"
        label="タイトル"
        {...register("title")}
      />
      <OverRideTextField
        id={`content`}
        name="content"
        type="text"
        size="small"
        label="内容"
        {...register("content")}
        multiline
        rows={4}
      />
    </CustomFormContainer>
  );
};

export default CreateThreadForm;
