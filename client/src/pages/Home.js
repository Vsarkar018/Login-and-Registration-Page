import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/appContext";
function Home() {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <>
      {user && navigate("/dashboard")}
      <Wrapper>
        <div className="container page">
          <div className="info">
            <h2>Don't have an account ? Register here</h2>
            <Link to="/register" className="btn hero-btn">
              register
            </Link>
          </div>
          <div className="info">
            <h2>Already have an account ? Login here</h2>
            <Link to="/login" className="btn hero-btn">Login</Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .container {
    min-height: calc(100vh - 6rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }
  h2 {
    font-weight: 700;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 6rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Home;
