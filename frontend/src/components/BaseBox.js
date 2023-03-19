import styled from "@emotion/styled";

const BaseBox = ({ children, beginColor, endColor }) => {
  const BaseContainer = styled.div`
    padding: 5px;
    margin: 16px 0 8px;
    border-radius: 3px;
    color: white;
    background: linear-gradient(135deg, ${beginColor} 0%, ${endColor} 100%);
  `;
  const BaseInner = styled.div`
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 3px;
  `;

  return (
    <>
      <BaseContainer>
        <BaseInner>{children}</BaseInner>
      </BaseContainer>
    </>
  );
};

export default BaseBox;
