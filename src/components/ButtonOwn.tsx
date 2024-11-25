import { Button } from "@chakra-ui/react";

export const ButtonOwn = ({ onClick }: any) => {
  return (
    <>
      <Button
        colorScheme="blue"
        size="lg"
        width="full"
        backgroundColor="#AA00FF"
        onClick={onClick}
      >
        Ok
      </Button>
    </>
  );
};
