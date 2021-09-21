import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCard = styled(motion.div)<{ color: string }>`
  width: 100%;
  padding: 10px 20px 30px 20px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
  background: ${({ color }) => color};
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.5);
`;

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  color: black;
  padding: 0;
  text-transform: capitalize;
  font-family: sans-serif;
  float: right;
  display: block;
  clear: both;
  cursor: pointer;
`;
