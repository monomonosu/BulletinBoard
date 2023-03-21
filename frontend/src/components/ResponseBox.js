const ResponseBox = (props) => {
  const response = props.response;
  return (
    <>
      <div key={response.id}>
        <p>
          {response.response_no}名前：{response.name} : {response.created_at}
        </p>
        <p>{response.content}</p>
      </div>
    </>
  );
};

export default ResponseBox;
