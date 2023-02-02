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
    FormControl,
    Box,
    View,
    Select,
    CheckIcon,
  } from "native-base";

const QuantPessoas = () => {
    const [service, setService] = React.useState("");
    return <Center>
        <FormControl isRequired>
        <Box maxW="100%">
        <FormControl.Label>Número de pessoas</FormControl.Label>
          <Select selectedValue={service} minWidth="90%" accessibilityLabel="Casa para quantas pessoas" placeholder="Casa para quantas pessoas" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="1 Pessoa"  value="1" />
            <Select.Item label="2 Pessoas" value="2" />
            <Select.Item label="3 Pessoas" value="3" />
            <Select.Item label="4 Pessoas" value="4" />
            <Select.Item label="5 Pessoas" value="5" />
          </Select>
        </Box>
        </FormControl>
      </Center>;
  };

  export default QuantPessoas;