import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';



import {StyledCarrocelContainer, StyledImageContainer, StyledArrowContainer, StyledImage } from './StyledHome';

const imagens = [ ];

const Carrossel = () => {
  const [mudarImageIndex, setMudarImageIndex]= useState(0);

  const nextImage = () =>{
      setMudarImageIndex(primeiroIndex => primeiroIndex + 1);
  };

  const preImage = () => {
    setMudarImageIndex(primeiroIndex => primeiroIndex - 1);
  };

  return (
    <StyledCarrocelContainer>
      {mudarImageIndex !== 0 && (
        <StyledArrowContainer onClick={preImage}>
          <MdKeyboardArrowLeft />
        </StyledArrowContainer>
      )}
      <StyledImageContainer>
        <StyledImage src={imagens[mudarImageIndex]} />
      </StyledImageContainer>
      {mudarImageIndex !== imagens.length - 1 && (
        <StyledArrowContainer onClick={nextImage}>
          <MdKeyboardArrowRight />
        </StyledArrowContainer>
      )}
    </StyledCarrocelContainer>
  );
}
export default Carrossel;