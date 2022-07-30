import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";

import { Button } from "../../../../../core/components/button";
import { Input } from "../../../../../core/components/input/Input";
import { H2, P, Title } from "../../../../../core/components/typography";
import { EColor, EShadow } from "../../../../../core/model";

interface IForm {
  username: string;
  password: string;
}

export const LoginCard = () => {
  const methods = useForm<IForm>();

  return (
    <FormProvider {...methods}>
      <LoginForm>
        <LoginTitle>ورود</LoginTitle>
        <Input
          label="ایمیل"
          name="username"
          placeholder="ایمیل خود را وارد کنید"
        />
        <Input
          label="رمز عبور"
          name="password"
          placeholder="رمزعبور خود را وارد کنید"
        />

        <LoginButton>ورود</LoginButton>

        <SignUpWrapper>
          <Account>حساب کاربری ندارید؟</Account>

          {/* <Link href="/signUp">
            <LinkWrapper>ثبت نام</LinkWrapper>
          </Link> */}
        </SignUpWrapper>
      </LoginForm>
    </FormProvider>
  );
};

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 33.25rem;
  padding: 4rem 2.5rem;
  background-color: ${EColor.Gray100};
  border-radius: 0.5rem;
  box-shadow: ${EShadow.Xl};
`;

const LoginTitle = styled(H2)`
  color: ${EColor.Primary};
`;

const LoginButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
  height: 3.5rem;
  background: ${EColor.PrimaryDark};
`;

const Account = styled(P)`
  color: ${EColor.TextSecondaryLight};
`;

const SignUpWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const LinkWrapper = styled(Title)`
  color: ${EColor.Primary};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
