import styled, { css } from "styled-components";
import { EColor, EFontSize, EFontWeight, ETextColor } from "../../model";

interface IButtonProps {
  variant?: "contain" | "text";
}

export const Button = styled.button<IButtonProps>`
  width: fit-content;

  color: ${EColor.Primary};
  background-color: transparent;

  border: none;

  font-weight: ${EFontWeight.Regular};
  font-size: ${EFontSize.SM};

  :hover {
    cursor: pointer;
    filter: brightness(1.2);
  }

  ${(props) =>
    props.variant !== "text" &&
    css`
      height: 2.5rem;
      min-width: 4rem;

      padding: 0.5rem 1.5rem;
      border-radius: 2rem;

      color: ${ETextColor.OnPrimary};
      background-color: ${EColor.Primary};
    `}
`;
