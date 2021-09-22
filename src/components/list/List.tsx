import { AnimatePresence } from "framer-motion";
import React from "react";
import { Message } from "../../Api";
import { Card } from "../../components";
import { MessageType, useNuffContext } from "../../context";
import { StyledCount, StyledListContainer, StyledListTitle } from "./style";

const List: React.FC<IList> = ({ title = "", type = "error" }) => {
  const { handleDeleteMessage, messages } = useNuffContext();
  return (
    <StyledListContainer data-testid="list">
      <StyledListTitle>{title}</StyledListTitle>
      <StyledCount>Count {messages[type].length}</StyledCount>
      <AnimatePresence>
        {messages[type]?.map?.(
          ({ message, priority }: Message, idx: number) => (
            <Card
              key={message}
              variant={priority}
              onDelete={() => handleDeleteMessage(idx, type)}
            >
              {message}
            </Card>
          )
        )}
      </AnimatePresence>
    </StyledListContainer>
  );
};

export default React.memo(List);

export interface IList {
  title: string;
  type: MessageType;
}
