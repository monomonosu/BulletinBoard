import BaseBox from "./BaseBox";

const ThreadsList = (props) => {
  const threads = props.threads;
  return (
    <>
      <BaseBox beginColor={"#ffbe26"} endColor={"#b54200"}>
        {threads.map((thread) => (
          <span key={thread.id}>
            {thread.id}: ★{thread.title}({thread.responses_count + 1})
          </span>
        ))}
      </BaseBox>
    </>
  );
};

export default ThreadsList;
