import Link from "next/link";
import Layout from "../../components/layout";
import PageLinks from "../../components/layouts/PageLinks";
import BaseBox from "../../components/BaseBox";
import styled from "@emotion/styled";
import CreateThreadForm from "../../components/CreateThreadForm";
import BasicButton from "../../components/uis/BasicButton";

const NewThreadPage = () => {
  const CustomPageTitle = styled.h3`
    margin: 0 0 10px;
    text-align: left;
  `;

  return (
    <>
      <Layout title="新規スレッド書き込み">
        <PageLinks>
          <Link href={`/`}>
            <BasicButton className="-blue" buttonText="スレッド一覧" />
          </Link>
        </PageLinks>
        <BaseBox beginColor={"#0f8999"} endColor={"#003b4d"}>
          <CustomPageTitle>新規スレッド書き込み</CustomPageTitle>
          <CreateThreadForm />
        </BaseBox>
      </Layout>
    </>
  );
};

export default NewThreadPage;
