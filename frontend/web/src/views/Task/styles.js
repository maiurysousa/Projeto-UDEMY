import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items: center;

    .inative {
        opacity: 0.5;
    }

    button {
        border: none;
        background: none;
    }

`

export const Form = styled.div`
    width: 50%; 
    margin-bottom: 90px;

`
export const TypeIcons = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;

    img {
        width: 50px;
        height:50px;
        margin: 25px 10px 10px 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }
`
export const Input = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin-bottom: 5px;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1.5px solid #4FBDBA;
    }

    img {
        width: 25px;
        height: 25px;
        position: relative;
        left: 90%;
        bottom: 40px;
    }

`

export const TextArea = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span {
        color: #707070;
        margin-bottom: 5px;

    }

    textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        padding: 15px;
        border: 1.5px solid #4FBDBA;
        border-radius:  5px;
    }
`

export const Options = styled.div `
    display: flex;
    justify-content: space-between;

    button {
        font-weight: bold;
        color: #072227;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

    div {
        display: flex;
        align-items center;
        color: #4FBDBA;
        font-weight: bold;
        font-size: 18px;
    }

`
export const Save = styled.div `
    width: 100%;
    margin-top: 20px;

    button{
        width: 100%;
        background: #4FBDBA;
        bordeer: none;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;
        
        &:hover {
            opacity: 0.7;
        }
        
    }
`
