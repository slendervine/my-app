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
    View,
    Select,
    CheckIcon,
  } from "native-base";

const TipoImovel = () => {
    const [service, setService] = React.useState("");
    return <Center>
        <Box maxW="350">
          <Select selectedValue={service} minWidth="350" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Casa" value="1" />
            <Select.Item label="Kitnete" value="2" />
            <Select.Item label="Apartamento" value="3" />
            <Select.Item label="Sala Comercial" value="4" />
          </Select>
        </Box>
      </Center>;
  };

  export default TipoImovel;