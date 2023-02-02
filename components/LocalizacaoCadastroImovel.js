import React from "react";
import CidadeInfo from "./Input/Cidade";
import BairroInfo from "./Input/Bairro";
import CepInfo from "./Input/Cep";
import UFInfo from "./Input/UF";
import LogradouroInfo from "./Input/Logradouro";
import NumeroInfo from "./Input/Numero";

import {
  HStack,
  Heading,
} from "native-base";

const LocalizacaoCadastroImovel = () => {
    return (
    <>
    <Heading  size="lg">Localização</Heading>

    <HStack>
      <CepInfo />
      <UFInfo />
    </HStack>
    
    <HStack>
      <CidadeInfo />
    </HStack>
    
    <HStack>
      <LogradouroInfo />
    </HStack>
    
    
    <HStack>
      <BairroInfo />
      <NumeroInfo />
    </HStack>
    </>
)
  };

  export default LocalizacaoCadastroImovel;





