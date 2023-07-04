import { NoItemFoundLayout, NoItemFoundMessage } from "./NoItemFound.style";

interface Message {
  message: string;
}

const NoItemFound = ({ message }: Message) => {
  return (
    <NoItemFoundLayout>
      <NoItemFoundMessage>{message}</NoItemFoundMessage>
    </NoItemFoundLayout>
  );
};

export default NoItemFound;
