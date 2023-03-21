import styled from "@emotion/styled";
import BaseBox from "./BaseBox";
import ResponseBox from "./ResponseBox";
import Link from "next/link";

const ThreadBox = ({ thread, children }) => {
  const CustomThreadTitle = styled.h3`
    margin: 0;
    text-align: left;
  `;
  return (
    <>
      <BaseBox beginColor={"#afb42b"} endColor={"#5f6900"} key={thread.key}>
        <CustomThreadTitle>
          【{thread.id}:{thread.responses_count + 1}】
          <span>{thread.title}</span>
        </CustomThreadTitle>
        <p>
          1 名前 : <span>{thread.name}</span> : {thread.created_at}
        </p>
        <p>{thread.content}</p>

        {thread.responses.map((response) => (
          <ResponseBox key={response.key} response={response} />
        ))}

        <div>{children}</div>

        <div>
          <Link href={`/threads/${thread.id}`}>全部読む</Link>
        </div>
      </BaseBox>
    </>
  );
};

export default ThreadBox;
