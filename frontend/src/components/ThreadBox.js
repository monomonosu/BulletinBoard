import styled from "@emotion/styled";
import BaseBox from "./BaseBox";
import ResponseBox from "./ResponseBox";
import Link from "next/link";

const ThreadBox = ({ thread, children }) => {
  // レスポンス一覧トップに表示する投稿主レスポンス
  const firstResponse = {
    id: thread.id,
    name: thread.name,
    content: thread.content,
    response_no: 1,
    created_at: thread.created_at,
    updated_at: thread.created_at,
  };

  const CustomThreadTitle = styled.h3`
    margin: 0;
    text-align: left;
  `;

  const CustomLinkBox = styled.div`
    margin: 10px;
  `;
  return (
    <>
      <BaseBox beginColor={"#afb42b"} endColor={"#5f6900"} key={thread.key}>
        <CustomThreadTitle>
          【{thread.id}:{thread.responses_count + 1}】
          <span>{thread.title}</span>
        </CustomThreadTitle>

        {/* レスポンス一覧トップには投稿主のレスを表示 */}
        <ResponseBox response={firstResponse} />

        {thread.responses.map((response) => (
          <ResponseBox key={response.id} response={response} />
        ))}

        <div>{children}</div>

        <CustomLinkBox>
          <Link href={`/threads/${thread.id}`}>全部読む</Link>
        </CustomLinkBox>
      </BaseBox>
    </>
  );
};

export default ThreadBox;
