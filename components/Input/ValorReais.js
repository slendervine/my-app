import React from "react";
import {
  InputGroup,
  Stack,
  InputLeftAddon,
  Input,
  Heading,
} from "native-base";

const ValorReais = (props) => {
  return <Stack alignItems="center" w="170" mt="1.5">
      <Heading size="sm">{props.mylabel}</Heading>

      <InputGroup w={{
      base: "80%",
      md: "180"
    }} alignContent="center">
        <InputLeftAddon children={"R$"} />

        

        <Input w={{
        base: "80%",
        md: "180"
      }} placeholder="1.000,00" />
      </InputGroup>
    </Stack>;
};

export default ValorReais;