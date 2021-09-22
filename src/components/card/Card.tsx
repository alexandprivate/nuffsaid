import React from "react";
import { StyledButton, StyledCard } from "./style";

const Card: React.FC<ICard> = ({
  children,
  variant = 0,
  onDelete = () => {},
}) => {
  return (
    <StyledCard
      data-testid="card"
      color={COLORS[variant]}
      initial={{ y: "-50px", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "-50px",
        opacity: 0,
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
    >
      <p>{children}</p>
      <StyledButton onClick={onDelete}>clear</StyledButton>
    </StyledCard>
  );
};

export default React.memo(Card);

const COLORS: string[] = ["#F56236", "#FCE788", "#88FCA3"];

interface ICard {
  children: React.ReactNode;
  variant: number;
  onDelete: () => void;
}
