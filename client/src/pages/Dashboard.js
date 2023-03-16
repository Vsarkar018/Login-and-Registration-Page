import React from "react";
import { useGlobalContext } from "../context/appContext";
import styled from "styled-components";
function Dashboard() {
  const { user, isLoading, logout } = useGlobalContext();
  return (
    <Wrapper className="page full-page">
      <div className="container">
        <div className="form">
          <h4>{`Welcome ${user}`}</h4>
          <button
            type="button"
            className="btn btn-block"
            disabled={isLoading}
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  h4 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
  }
`;
export default Dashboard;
