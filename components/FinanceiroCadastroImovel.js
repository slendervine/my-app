import React from "react";
import CidadeInfo from "./Input/Cidade";
import BairroInfo from "./Input/Bairro";
import CepInfo from "./Input/Cep";
import UFInfo from "./Input/UF";
import LogradouroInfo from "./Input/Logradouro";
import NumeroInfo from "./Input/Numero";
import DiaPagamentoInfo from "./Select/DiaPagamento";
import ValorReaisInfo from "./Input/ValorReais";

import {
  HStack,
  Heading,
  Center,
} from "native-base";

const FinanceiroCadastroImovel = () => {
  return (
    <>
    <Heading  size="lg">Financeiro</Heading>
    <Center alignItems="center">
    <HStack>
      
        <ValorReaisInfo  mylabel="Aluguel" />
        <ValorReaisInfo  mylabel="Caução"/>
     
    </HStack>
    </Center>
    
    <Heading  size="sm" mt={8}>Que dia será cobrado o aluguel?</Heading>
    <HStack>
      <DiaPagamentoInfo/>
    </HStack>
    </>
)
  };

  export default FinanceiroCadastroImovel;





