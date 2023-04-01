import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import PageLinks from "../../components/layouts/PageLinks";
import BasicButton from "../../components/uis/BasicButton";
import BaseBox from "../../components/BaseBox";
import ResponseBox from "../../components/ResponseBox";
import ThreadFormShow from "../../components/ThreadFormShow";
import axios from "axios";

const ShowThreadPage = () => {
  const CustomThreadTitle = styled.h3`
    margin: 0;
    text-align: left;
  `;

  const router = useRouter();
  const { id } = router.query;
  const [thread, setThread] = useState({});
  useEffect(() => {
    if (router.isReady) {
      axios
        .get(id ? `${process.env.NEXT_PUBLIC_API_URL}/threads/${id}` : "")
        .then((res) => {
          console.log(res.data.data);
          setThread(res.data.data);
        });
    }
  }, [router, id]);

  return (
    <>
      <Layout title="スレッド詳細">
        <PageLinks>
          <Link href={`/`}>
            <BasicButton className="-blue" buttonText="掲示板に戻る" />
          </Link>
        </PageLinks>
        <BaseBox beginColor={"#8d6e63"} endColor={"#1b0000"}>
          <CustomThreadTitle>
            【{thread.id}:{thread.responses_count + 1}】
            <span>{thread.title}</span>
          </CustomThreadTitle>
          {thread && (
            <>
              {thread.responses &&
                thread.responses.map((response) => (
                  <ResponseBox key={response.id} response={response} />
                ))}
            </>
          )}
          <ThreadFormShow threadId={thread.id} setThread={setThread} />
        </BaseBox>
      </Layout>
    </>
  );
};

export default ShowThreadPage;
