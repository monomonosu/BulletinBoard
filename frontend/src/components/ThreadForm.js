import axios from "axios";
import { memo } from "react";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material";

const ThreadForm = (props) => {
  const CustomTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
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

  const threadId = props.threadId;
  const setThreads = props.setThreads;
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

  // フォーム内容送信
  const createResponse = async (threadId, param) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/threads/${threadId}/responses`,
        param
      )
      .then((res) => {
        console.log(res);
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/threads`).then((res) => {
          setThreads(res.data.data);
          console.log(res.data.data);
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div>
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
      </div>
      <CustomTextField
        id={`content-${threadId}`}
        name="content"
        type="text"
        size="small"
        label="内容"
        {...register("content")}
        multiline
        rows={4}
      />
      <button onClick={handleSubmit(onSubmit)}>送信</button>
    </>
  );
};

const MemoThreadForm = memo(ThreadForm);

export default MemoThreadForm;
