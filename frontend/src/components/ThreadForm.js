import axios from "axios";
import { memo, useEffect, useState } from "react";

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
        名前：
        <input
          id={`name-${threadId}`}
          name="name"
          type="text"
          value={formResponses.name}
          onChange={(e) => handleChange(e)}
        ></input>
        メアド：
        <input
          id={`email-${threadId}`}
          name="email"
          type="text"
          value={formResponses.email}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      内容：
      <textarea
        id={`content-${threadId}`}
        name="content"
        type="text"
        value={formResponses.content}
        onChange={(e) => handleChange(e)}
      ></textarea>
      <button onClick={() => createResponse(threadId)}>送信</button>
    </>
  );
};

const MemoThreadForm = memo(ThreadForm);

export default MemoThreadForm;
