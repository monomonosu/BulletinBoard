import styled from "@emotion/styled";
import React from "react";

const ResponseBox = (props) => {
  const response = props.response;
  const textContent = response.content.split(/(\n)/).map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.match(/\n/) ? <br /> : item}
      </React.Fragment>
    );
  });

  const CustomResponseBox = styled.div`
    text-align: left;
    margin: 20px 0;
  `;

  const CustomResponseInfo = styled.p`
    margin: 0;
  `;

  const CustomContent = styled.p`
    margin: 5px 20px;
  `;

  return (
    <>
      <CustomResponseBox key={response.id}>
        <CustomResponseInfo>
          {response.response_no} 名前：{response.name} : {response.created_at}
        </CustomResponseInfo>
        <CustomContent>{textContent}</CustomContent>
      </CustomResponseBox>
    </>
  );
};

export default ResponseBox;
