import styled from "styled-components";

const Container = styled.section`
  padding: 1rem 8rem;
  min-height: 100vh;
`;

export default function PageContainer({ children, pageName }) {
  return <Container className={pageName}>{children}</Container>;
}
