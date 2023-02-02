import React from "react";
import QuantPessoasInfo from "./Select/QuantPessoas";

import {
  HStack,
  Heading,
} from "native-base";

const LocacaoCadastroImovel = (props) => {
  return (
    <>
    <Heading  size="lg">Sobre a locação</Heading>
    <HStack>
      <QuantPessoasInfo />
    </HStack>
    </>
)
  };

  export default LocacaoCadastroImovel;





