import React from "react";
import {
  VStack,
  Box,
  HStack,
  Image,
  Text,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ imageSrc, title, description }) => {
  return (
    <Box
    backgroundColor="white"
    textColor="black"
    rounded="lg"
    paddingBottom={5}
 
  >

    <VStack spacing={3} align="start" maxW="sm" m='4' >
      <Image
        src={imageSrc}
        alt={title}
        borderRadius="lg"
        objectFit="cover"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">{title}</Heading>
        <Text>
          {description}
        </Text>
        <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Readmore
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Live Demo 
      </Button>
    </ButtonGroup>
  </CardFooter>
      </Stack>
    </VStack>
    </Box>
  );
};

const CardBody = ({ children }) => {
  return (
    <VStack spacing={4} align="start">
      {children}
    </VStack>
  );
};

const CardFooter = ({ children }) => {
  return (
    <HStack mt="4" spacing="2">
      {children}
    </HStack>
  );
};

export  default  Card;
