import styled from 'styled-components';

export const Container = styled.div`
    margin: 4.5rem 0 0;
    padding: 0 50px;
    background-color: #fff;
    h1{
        text-align: center;
        margin:10px;
        padding:15px;
    }

    form {
    border-radius: .5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05);
    padding: 1rem;
    }
    input{
        width: 300px;
        color: #4a5568;
        background-color: #fff;
        border: 1px solid #e2e8f0;
        font-size: 1rem;
        padding: .5rem 1rem;
        margin: 1rem 0;
        display: block;
        border-radius: .5rem;
    }
    textarea {
        width: 100%;
        color: #4a5568;
        background-color: #fff;
        border: 1px solid #e2e8f0;
        font-size: 1rem;
        padding: .5rem 1rem;
        margin: 1rem 0;
        display: block;
        border-radius: .5rem;
    }
`;

export const Button = styled.button`
    background-color: #4299e1;
    color: #fff;
    font-size: 1rem;
    padding: .5rem 1rem;
    border-radius: .5rem;
    border: none;
    &:hover {
        background-color: #2b6cb0;
        cursor: pointer;
    }
`;


