import axios from "axios";
import TextField from "@mui/material/TextField";
import BasicButton from "./uis/BasicButton";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material";
import emStyled from "@emotion/styled";

const ThreadFormShow = (props) => {
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

  const threadId = props.threadId;
  const setThread = props.setThread;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    createResponse(threadId, data);
    reset((formValues) => ({
      ...formValues,
      name: "",
      email: "",
      content: "",
    }));
  };

  // NOTE:ロジックは呼び出し元で作成し、共通化できそう。
  // フォーム内容送信
  const createResponse = async (threadId, param) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/threads/${threadId}/responses`,
        param
      )
      .then((res) => {
        console.log(res);
        axios
          .get(
            threadId
              ? `${process.env.NEXT_PUBLIC_API_URL}/threads/${threadId}`
              : ""
          )
          .then((res) => {
            setThread(res.data.data);
            console.log(res.data.data);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <CustomFormContainer>
      <FormInner>
        <CustomTextField
          id={`name-${threadId}`}
          name="name"
          type="text"
          size="small"
          label="名前"
          {...register("name")}
        />
        <CustomTextField
          id={`email-${threadId}`}
          name="email"
          type="text"
          size="small"
          label="メールアドレス"
          {...register("email")}
        />
        <BasicButton buttonText="送信" onClick={handleSubmit(onSubmit)} />
      </FormInner>
      <OverRideTextField
        id={`content-${threadId}`}
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

export default ThreadFormShow;
