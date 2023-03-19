import Layout from "../components/layout";
import BaseBox from "../components/BaseBox";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

export default function Home() {
  const [threads, setThreads] = useState([]);
  const [formResponses, setFormResponses] = useState([]);

  // 返信フォーム情報の作成
  useEffect(() => {
    threads &&
      setFormResponses(
        threads.map(() => ({ name: "", email: "", content: "" }))
      );
  }, [threads]);

  // スレッド一覧呼び出し
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/threads`).then((res) => {
      setThreads(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  // フォーム内容送信
  const createResponse = async (threadId, index) => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/threads/${threadId}/responses`,
        formResponses[index]
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
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormResponses((prev) => {
      const newForm = [...prev];
      newForm[index] = { ...newForm[index], [name]: value };
      return newForm;
    });
  };

  return (
    <>
      <Layout title="スレッド一覧">
        <BaseBox beginColor={"#ffbe26"} endColor={"#b54200"}>
          {threads.map((thread) => (
            <div key={thread.key}>
              {thread.id}: ★{thread.title}({thread.responses_count + 1})
            </div>
          ))}
        </BaseBox>

        {threads &&
          threads.map((thread, index) => (
            <>
              <BaseBox beginColor={'#afb42b'} endColor={'#5f6900'} key={thread.key}>
                <h3>
                  【{thread.id}:{thread.responses_count + 1}】
                  <span>{thread.title}</span>
                </h3>
                <p>
                  1 名前 : <span>{thread.name}</span> : {thread.created_at}
                </p>
                <p>{thread.content}</p>

                {thread.responses.map((response) => (
                  <div key={response.id}>
                    <p>
                      {response.response_no}名前：{response.name} :{" "}
                      {response.created_at}
                    </p>
                    <p>{response.content}</p>
                  </div>
                ))}

                {formResponses[index] && (
                  <>
                    <div>
                      名前：
                      <input
                        id={`name-${thread.id}`}
                        name="name"
                        type="text"
                        value={formResponses[index].name}
                        onChange={(e) => handleChange(e, index)}
                      ></input>
                      メアド：
                      <input
                        id={`email-${thread.id}`}
                        name="email"
                        type="text"
                        value={formResponses[index].email}
                        onChange={(e) => handleChange(e, index)}
                      ></input>
                    </div>
                    内容：
                    <textarea
                      id={`content-${thread.id}`}
                      name="content"
                      type="text"
                      value={formResponses[index].content}
                      onChange={(e) => handleChange(e, index)}
                    ></textarea>
                    <button onClick={() => createResponse(thread.id, index)}>
                      送信
                    </button>
                  </>
                )}
                <div>
                  <Link href={`/threads/${thread.id}`}>全部読む</Link>
                </div>
              </BaseBox>
            </>
          ))}
      </Layout>
    </>
  );
}
