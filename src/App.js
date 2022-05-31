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
  Divider,
  VStack,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';

function NavBar(props) {
  return (
    <Flex align={"right"} m={5}>
      <Text>Imaad Mohammed</Text>
      <Spacer />
      <Text>More</Text>
    </Flex>
  );
}



function AboutMe(props) {
  return (
    <VStack>
      <Text fontSize={"2xl"}>Skills</Text>
    </VStack>
  );
}
function TabBody(props) {
  return (
    <Tabs>
      <TabList>
        <Tab>About Me</Tab>
        <Tab>Page 2</Tab>
        <Tab>Page 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel><AboutMe /></TabPanel>
        <TabPanel><Text fontSize={"2xl"}>Test2</Text></TabPanel>
        <TabPanel>Test3</TabPanel>
      </TabPanels>
    </Tabs>);
}
function Body(props) {
  return (
    <VStack>
      <Text m={5} fontSize={"3xl"}>I'm Imaad Mohammed, a Computer Science Graduate from Cal Poly Pomona!</Text>
      <TabBody/>
    </VStack>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Divider />
      <Body />
    </ChakraProvider>
  );
}

export default App;
