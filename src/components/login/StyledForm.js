import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: #585858;
`

export const Container = styled.div`
  background-color:white;
  display:block;
  margin:5rem 25rem 2rem;
  height:20rem;
`;

export const Form = styled.form`
    
`;

export const FormWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`
export const FormHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
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
    border-bottom-color: #ff6699;
    outline: 0;
  }

  &:focus { 
    &::-webkit-input-placeholder {
      position: relative;
      color: #ff6699;
      top: -10px;
      font-size: 12px;
	    left: 0px;
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
  color: #fff;
  background-color: #ff6699;
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
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color .25s ease-in;

  &:hover {
    color: #ff6699;
  }
`
