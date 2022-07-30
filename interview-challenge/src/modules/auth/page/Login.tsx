import styled from "styled-components";

import { EBreakpoint, EColor } from "../../../core/model";
import { LoginCard } from "../components/login/loginCard/LoginCard";

const Login = () => {
  return (
    <LoginWrapper>
      <LoginCard />
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  overflow: hidden;
  background-color: ${EColor.Gray200};

  @media (min-width: ${EBreakpoint.LG}) {
    padding: 1.5rem;
  }
`;

Login.withoutLayout = true;

export default Login;
