import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.actived ? '#4FBDBA': '#072227'} ;
    padding:10px;
    cursor: pointer;
    transition: all 0.3s ease;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
        width: 25px;
        height: 25px;
    }

    span {
        color: #F2F2F2;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover{
        background-color: #4FBDBA;

    }
`
