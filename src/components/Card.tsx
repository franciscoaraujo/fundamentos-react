import { Box, Flex, Input } from "@chakra-ui/react";

import { Login } from "../services/Login";
import { Header } from "./Header";
import { ButtonOwn } from "./ButtonOwn";

export const Card = () => {
  return (
    <>
      <Box
        minHeight={"100vh"}
        alignItems={"center"}
        bg="purple.600"
        color="white"
        shadow={"sm"}
      >
        <Header />
        <Flex
          gap={3}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"82vh"}
        >
          <Box
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="lg" // Modified shadow to "lg"
            width="sm"
            textAlign={"center"}
          >
            <Box
              as="h1"
              fontSize="2xl"
              fontWeight="bold"
              color="#AA00FF"
              padding="3"
            >
              Login
            </Box>
            <Input
              placeholder="Email"
              size={"lg"}
              type="email"
              mb={4}
              bg="gray.100"
              color="black"
              textAlign="center"
              name="email"
            />
            <Input
              placeholder="Senha"
              size={"lg"}
              type="password"
              mb={4}
              bg="gray.100"
              color="black"
              textAlign="center"
              name="password"
            />

            <ButtonOwn onClick={Login} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
