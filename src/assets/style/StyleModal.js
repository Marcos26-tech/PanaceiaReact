import styled from "styled-components";


export const Modal = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0 ,0, 0.5);
display: flex;
align-items: center;
justify-content: center;  
`;

export const ModalContent = styled.div`
width: 750px;
background-color: #fff;
max-height: calc(100vh - 210px);
overflow-y: auto;
`;

export const ModalContent2 = styled.div`
width: 1200px;
background-color: #fff;
max-height: calc(100vh - 210px);
overflow-y: auto;
`;

export const ModalHeader = styled.div`
padding: 10px;
`;

export const ModalTitle = styled.div`
margin: 0;
`;

export const ModalBody = styled.div`
padding: 10px;
border-top: 1px solid #eee;
border-bottom: 1px solid #eee;
`;
export const ModalFooter = styled.div`
padding: 10px;
`;

export const CheckImg = styled.div`
input[type="checkbox"][id^="checkbox"] {
display: none;
}
label {
border: 1px solid #fff;
padding: 10px;
display: block;
position: relative;
margin: 10px;
cursor: pointer;
}

label::before {
background-color: white;
color: white;
content: " ";
display: block;
border-radius: 50%;
border: 1px solid grey;
position: absolute;
top: -5px;
left: -5px;
width: 25px;
height: 25px;
text-align: center;
line-height: 28px;
transition-duration: 0.4s;
transform: scale(0);
}

label img {
height: 100px;
width: 150px;
border-radius: 4px;
transition-duration: 0.2s;
}

input[type='checkbox']:checked + label {
border-color: #ddd;
}

input[type='checkbox']:checked + label::before {
content: "✓";
background-color: grey;
transform: scale(1);
}

input[type='checkbox']:checked + label img{
    height: 100px;
    width: 150px;
    transform: scale(1.0);
    box-shadow: 0 0 5px #333;
    z-index: -1;

}
`;