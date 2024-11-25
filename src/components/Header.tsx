import React from "react";

import { Box, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box
      bg="purple.600"
      w="100%"
      p={4}
      color="white"
      overflow="hidden"
      shadow={"sm"}
    >
      <Text fontSize="2xl" fontWeight="bolder">
        $ Dio Bank $
      </Text>
    </Box>
  );
};
