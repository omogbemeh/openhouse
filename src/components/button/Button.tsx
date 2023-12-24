import { FC, ReactNode } from "react";
import { ButtonContainer } from "./Button.styles";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "reset" | "submit" | "button";
  background?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type,
  background,
}) => {
  return (
    <ButtonContainer
      background={background}
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
