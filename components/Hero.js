import styled from "styled-components";
import { FaCamera, FaBookmark, FaFileDownload } from "react-icons/fa";

const Hero = styled.div`
  background: url("https://images.pexels.com/photos/2301285/pexels-photo-2301285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: right center;
  background-size: contain;
  background-repeat: no-repeat;

  h2 {
    font-size: 4.07rem;
    color: ${(props) => props.theme.text};
    padding: 15rem 30rem 15rem 1rem;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  gap: 3rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.pink};
  height: 20rem;
  padding: 3rem 2rem;

  p {
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.85rem;
  }

  hr {
    border: none;
    background-color: #fff;
    width: 20%;
    height: 2px;
    margin: 1rem 0;
  }
`;

export default function HeroContainer({ title }) {
  return (
    <Hero>
      <h2>{title}</h2>
      <CardContainer>
        <Card>
          <FaCamera size='28' style={{ marginBottom: "2rem" }} />
          <h3>Something</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            asperiores eaque impedit, dolor consequatur repellat sapiente.
            Deserunt sed excepturi quaerat!
          </p>
        </Card>
        <Card>
          <FaBookmark size='28' style={{ marginBottom: "2rem" }} />
          <h3>Something</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            asperiores eaque impedit, dolor consequatur repellat sapiente.
            Deserunt sed excepturi quaerat!
          </p>
        </Card>
        <Card>
          <FaFileDownload size='28' style={{ marginBottom: "2rem" }} />
          <h3>Something</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            asperiores eaque impedit, dolor consequatur repellat sapiente.
            Deserunt sed excepturi quaerat!
          </p>
        </Card>
      </CardContainer>
    </Hero>
  );
}
