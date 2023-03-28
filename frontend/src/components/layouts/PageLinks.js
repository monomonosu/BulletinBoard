import styled from "@emotion/styled";

const CustomLinkBox = styled.div`
  text-align: right;
`;

const PageLinks = ({ children }) => {
  return <CustomLinkBox>{children}</CustomLinkBox>;
};

export default PageLinks;
