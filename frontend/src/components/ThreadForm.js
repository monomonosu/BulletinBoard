import axios from "axios";
import { memo, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

const ThreadForm = (props) => {
  const [formResponses, setFormResponses] = useState([]);
  const threadId = props.threadId;
  const setThreads = props.setThreads;

  // 返信フォーム情報の作成
  useEffect(() => {
    setFormResponses({ name: "", email: "", content: "" });
  }, []);

  // フォーム内容送信
  const createResponse = async (threadId) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/threads/${threadId}/responses`,
        formResponses
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

  // フォーム入力時
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormResponses((prev) => {
      console.log(prev);
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <div>
        <TextField
          id={`name-${threadId}`}
          name="name"
          type="text"
          size="small"
          label="名前"
          value={formResponses.name}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          id={`email-${threadId}`}
          name="email"
          type="text"
          size="small"
          label="メールアドレス"
          value={formResponses.email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <TextField
        id={`content-${threadId}`}
        name="content"
        type="text"
        size="small"
        label="内容"
        value={formResponses.content}
        onChange={(e) => handleChange(e)}
        multiline
        rows={4}
      />
      <button onClick={() => createResponse(threadId)}>送信</button>
    </>
  );
};

const MemoThreadForm = memo(ThreadForm);

export default MemoThreadForm;
