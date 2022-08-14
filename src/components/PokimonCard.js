import React from "react";
import { Box, Heading, HStack, Image, Spacer, Text } from "@chakra-ui/react";

const PokimonCard = ({ item }) => {
  return (
    <Box rounded={"lg"} bg={"white"} shadow={"md"} cursor={"pointer"} pb={4}>
      <Box px={4} py={3}>
        <Image src={item.images.large} />
      </Box>
      <HStack px={4}>
        <Heading size={"md"}>{item.name}</Heading>
        <Spacer />
        <HStack>
          <Heading size={"md"}>HP:</Heading>
          <Text>{item.hp}</Text>
        </HStack>
      </HStack>
      <Box mt={3} px={4}>
        <Text fontWeight={"bold"}>Attacks:</Text>
        <HStack w={"full"}>
          {item.attacks?.map((attack, idx) => {
            return (
              <Text key={idx} fontSize={"sm"} fontWeight={"semibold"}>
                {attack.name},
              </Text>
            );
          })}
        </HStack>
      </Box>
      <Box mt={1} px={4}>
        <Text fontWeight={"bold"}>Abilities:</Text>
        <HStack w={"full"}>
          {item.abilities?.map((ability, idx) => {
            return (
              <Text key={idx} fontSize={"sm"} fontWeight={"semibold"}>
                {ability.name}
              </Text>
            );
          })}
        </HStack>
        {!item.abilities && <Text fontSize={"sm"}> N/A </Text>}
      </Box>
    </Box>
  );
};

export default PokimonCard;
