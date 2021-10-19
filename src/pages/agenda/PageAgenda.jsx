import React from "react";
import { InlineWidget } from "react-calendly";

import { Container } from "./StyledAgenda";

const Agenda = () => {
  return (
    <>
      <Container>
        <h2>
          Crie aqui os eventos de sua comunidade seguindo as instruçoes abaixo,
          construindo laços de amizade de forma genuína
        </h2>
        <div>
          <InlineWidget url="https://calendly.com/panaceia/panaceia?primary_color=13f00d" />
        </div>
      </Container>
    </>
  );
};

export default Agenda;
