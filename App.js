import React from "react";
import { Platform,SafeAreaView, ScrollView, StyleSheet } from "react-native";
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
  Divider,
} from "native-base";

import NavbarBottom from "./components/NavbarBottom";
import TipoImovel from "./components/Select/TipoImovel";
import LocalizacaoCadastroImovelInfo from "./components/LocalizacaoCadastroImovel";
import FinanceiroCadastroImovellInfo from "./components/FinanceiroCadastroImovel";
import LocacaoCadastroImovelInfo from "./components/LocacaoCadastroImovel";


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <ScrollView>

      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack alignItems="center">
          <NavbarBottom mt="100px"/>
      

      
          <Heading  size="sm">Qual o tipo de imóvel você quer cadastrar?</Heading>
          <TipoImovel px={10} accessibilityLabel="teste" placeholder="teste"/>

          <Divider my="2" _light={{
              bg: "emerald.500"
            }} _dark={{
              bg: "emerald.500"
            }} w="300" mt={8} mb={8} 
          />
        
         
            <LocalizacaoCadastroImovelInfo />

            <Divider my="2" _light={{
              bg: "emerald.500"
            }} _dark={{
              bg: "emerald.500"
            }} w="300" mt={8} mb={8} />

            <FinanceiroCadastroImovellInfo />

            <Divider my="2" 
              _light={{
                bg: "emerald.500"
              }} 
              _dark={{
                bg: "emerald.500"
              }} 
              w="300" mt={8} mb={8} 
            />

            <LocacaoCadastroImovelInfo />
          
        </VStack>
      </Center>



      </ScrollView>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
