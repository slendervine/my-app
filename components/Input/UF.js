import React from "react";
import {
    Stack,
    Input,
    Box,
    FormControl,
    WarningOutlineIcon,
  } from "native-base";

const UF = () => {
    return <Box w="50%">
    <FormControl isRequired>
      <Stack mx="4">
        <FormControl.Label>Estado</FormControl.Label>
        <Input _light={{
        bg: "coolGray.100",
        _hover: {
          bg: "coolGray.200"
        },
        _focus: {
          bg: "coolGray.200:alpha.70"
        }
      }} _dark={{
        bg: "coolGray.800",
        _hover: {
          bg: "coolGray.900"
        },
        _focus: {
          bg: "coolGray.900:alpha.70"
        }
      }} shadow={2} type="text" defaultValue="" placeholder="Selecione..." />
      </Stack>
    </FormControl>
  </Box>;
  };

  export default UF;