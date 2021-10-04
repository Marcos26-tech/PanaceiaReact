import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: rgb(26, 25, 25);
`

export const Container = styled.div`
  display:block;
  margin:5rem 25rem 2rem;
`;

export const Form = styled.form`
   width:100%;
   height:21rem; 
`;

export const FormWrapper = styled.div`
  background-color:white;
  opacity:95%;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 75px auto 0;
  width: 500px;
  height:700px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`
export const FormHeader = styled.header`
  margin: 50px 0 10px;
  padding-top: 24px;
  padding-bottom:19px;
`
export const FormBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`
export const FormFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 35px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`
export const FormInput = styled.input`
  padding: 10px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color .25s ease-in;

  &:focus {
    border-bottom-color: rgb(255, 234, 0);
    outline: 0;
  }

  &:focus { 
    &::-webkit-input-placeholder {
      position: relative;
      color: rgb(255, 234, 0);
      top: -12px;
      font-size: 12px;
	    left: 4px;
      opacity: 1;
    }
  }
`

export const FormButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-color:rgb(255, 234, 0);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
`


export const FormLink = styled.a`
  margin: 0 81px 0;
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: rgb(52, 52, 52);
  border-bottom: 1px solid rgb(221, 221, 221);
  cursor: pointer;
  transition: color .25s ease-in;

  &:hover {
    color: rgb(255, 234, 0);
  }
`
