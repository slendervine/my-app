import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Container,

} from "native-base";

import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
    return <Box bg={{
      linearGradient: {
        colors: ['lightBlue.300', 'violet.800'],
        start: [0, 0],
        end: [1, 0]
      }
    }} px="2.5" py="8" w="110%" rounded="xl" _text={{
      fontSize: 'md',
      fontWeight: 'medium',
      color: 'warmGray.50',
      textAlign: 'center'
    }}>
        <VStack alignItems="center">
            <Heading>Olá! Fulano!</Heading>
            <Text>Tudo pronto para cadastrar o seu imóvel, basta seguir os passos a seguir...</Text>
        </VStack>
      </Box>;
  };
  
  const config = {
    dependencies: {
      'linear-gradient': LinearGradient
    }
  };
  
  function NavbarBottom() {
    return <NativeBaseProvider config={config}>
        <Center flex={1} p="10">
          <App />
        </Center>
      </NativeBaseProvider>;
  }

export default NavbarBottom;