import styled from "@emotion/styled";

const Layout = ({ children, title }) => {
  const BaseTitle = styled.h1`
    color: #656565;
    margin-top: 0;
    padding-top: 24px;
    font-size: 36px;
    line-height: 40px;
    font-weight: 700;
    text-align: center;
  `;

  const BaseBackGround = styled.div`
    min-height: 100vh;
    background: white;
  `;

  const BaseLayout = styled.main`
    width: 70%;
    margin: 0 auto;
    text-align: center;
    padding: 16px;
  `;
  return (
    <>
      <BaseBackGround>
        <header>
          <BaseTitle>掲示板</BaseTitle>
        </header>
        <BaseTitle>{title}</BaseTitle>
        <BaseLayout>{children}</BaseLayout>
      </BaseBackGround>
    </>
  );
};

export default Layout;
