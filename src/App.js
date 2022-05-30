import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  theme,
  HStack,
  Flex,
  Button,
  Spacer,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function NavBar(props) {

  return (
    <Flex>
      <HStack>
        <Button colorScheme={'blue'}>Button 1</Button>
        <Button colorScheme={'red'}>Button 2</Button>
      </HStack>
      <Spacer></Spacer>
      <ColorModeSwitcher />
    </Flex>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar></NavBar>
      <Box textAlign="center" fontSize="xl">
        <Text>
          Imaad Mohammed
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
