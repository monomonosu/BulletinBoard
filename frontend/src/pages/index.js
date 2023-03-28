import Layout from "../components/layout";
import ThreadsList from "../components/ThreadsList";
import ThreadBox from "../components/ThreadBox";
import ThreadForm from "../components/ThreadForm";
import axios from "axios";
import { useEffect, useState } from "react";
import BasicButton from "../components/uis/BasicButton";
import Link from "next/link";
import styled from "@emotion/styled";
import PageLinks from "../components/layouts/PageLinks";

export default function Home() {
  const CustomLink = styled.div`
    text-align: right;
  `;

  const [threads, setThreads] = useState([]);

  // スレッド一覧呼び出し
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/threads`).then((res) => {
      setThreads(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
    <>
      <Layout title="スレッド一覧">
        <PageLinks>
          <Link href={`/threads/new`}>
            <BasicButton className="-green" buttonText="新規作成" />
          </Link>
        </PageLinks>
        <ThreadsList threads={threads} />
        {threads &&
          threads.map((thread, index) => (
            <>
              <ThreadBox thread={thread} index={index}>
                <ThreadForm threadId={thread.id} setThreads={setThreads} />
              </ThreadBox>
            </>
          ))}
      </Layout>
    </>
  );
}
