import { StyledButton } from "./Button.styles";
import type { ButtonProps } from "./Button.props";

export function Button({ onClick, children }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
