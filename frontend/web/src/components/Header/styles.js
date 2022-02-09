import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #072227;
    border-bottom: 5px solid #4FBDBA;

    display: flex;
`

export const LeftSide = styled.div`
    width 50%;
    height: 70px;    
    display: flex;
    align-items: center;
    padding-left: 10px;

    img{
        width:100px;
        height: 40px;
    }
    

`

export const RighSide = styled.div`
width 50%;
height: 70px;
display: flex;
align-items: center;
justify-content: flex-end;

a {

    color: #f2f2f2;
    font-weght: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover{
        color:#4FBDBA;
    }
}

button {
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

#notification {
    img {
        width: 25px;
        height: 25px;
    }

    span {
        background: #f2f2f2;
        color: #4FBDBA;
        padding: 3px 7px;
        border-radius: 50%;
        position: relative;
        top: -20px;
        right: 10px;
        font-weight: bold;
    }

    &:hover {
        opacity: 0.5;
    }
}

.dividir::after{
    content: '|';
    margin: 0 10px;
    color: #f2f2f2;
}
    

`