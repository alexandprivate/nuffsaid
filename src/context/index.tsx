import { IconButton } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import generateMessage, { Message } from "../Api";

export type MessageType = "error" | "warning" | "info";

const initialMessages = {
  error: [],
  warning: [],
  info: [],
};

const initialContextValues = {
  messages: initialMessages,
  setMessages: () => {},
  handleToggleStart: () => {},
  handleClear: () => {},
  handleDeleteMessage: () => {},
  toggleStart: true,
};

let NuffContext: React.Context<IContext>;
const { Provider } = (NuffContext =
  React.createContext<IContext>(initialContextValues));
export const useNuffContext = () => React.useContext(NuffContext);

export const NuffProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = React.useState<Messages>(initialMessages);
  const [toggleStart, setToggleStart] = React.useState<boolean>(true);
  const [setSnackbar, setSetSnackbar] = React.useState<string>("asdas");

  function handleSetMessageByPriority(message: Message) {
    if (message.priority === 0) {
      setSetSnackbar((state) => (!state ? message.message : ""));
      return setMessages((current) => ({
        ...current,
        error: [message, ...current.error],
      }));
    }
    if (message.priority === 1) {
      return setMessages((current) => ({
        ...current,
        warning: [message, ...current.warning],
      }));
    }
    return setMessages((current) => ({
      ...current,
      info: [message, ...current.info],
    }));
  }

  React.useEffect(() => {
    if (toggleStart) {
      const cleanUp = generateMessage((message: Message) =>
        handleSetMessageByPriority(message)
      );
      return cleanUp;
    }
  }, [setMessages, setToggleStart, toggleStart]);

  const handleToggleStart = () =>
    setToggleStart((currentToggleStatus) => !currentToggleStatus);

  const handleClear = () => setMessages(initialMessages);

  const handleDeleteMessage = (idx: number, type: MessageType) =>
    setMessages((current) => ({
      ...current,
      [type]: [...current[type].slice(0, idx), ...current[type].slice(idx + 1)],
    }));

  return (
    <Provider
      value={{
        messages,
        setMessages,
        handleToggleStart,
        toggleStart,
        handleClear,
        handleDeleteMessage,
      }}
    >
      {children}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!setSnackbar}
        autoHideDuration={2000}
        onClose={() => setSetSnackbar("")}
        message={setSnackbar}
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setSetSnackbar("")}
            >
              &times;
            </IconButton>
          </>
        }
      />
    </Provider>
  );
};

interface Messages {
  error: Message[];
  warning: Message[];
  info: Message[];
}

interface IContext {
  messages: Messages;
  setMessages: Function;
  handleToggleStart: () => void;
  handleClear: () => void;
  handleDeleteMessage: (idx: number, type: MessageType) => void;
  toggleStart: boolean;
}
