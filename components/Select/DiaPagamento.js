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

const DiaPagamento = () => {
    const [service, setService] = React.useState("");

    return <Center>
        <Box maxW="100%">
          <Select selectedValue={service} minWidth="90%" accessibilityLabel="Dia de pagamento..." placeholder="Dia de pagamento..." _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Dia 1" value="1"/>
            <Select.Item label="Dia 2" value="2"/>
            <Select.Item label="Dia 3" value="3"/>
            <Select.Item label="Dia 4" value="4"/>
            <Select.Item label="Dia 5" value="5"/>
          </Select>
        </Box>
      </Center>;
  };

  export default DiaPagamento;