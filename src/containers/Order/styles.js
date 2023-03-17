import styled from 'styled-components'


export const Container = styled.div `
    background: #0A0A10;
    display: flex;    flex-direction: column;
    align-items: center;
    height: 100%;
    
`
export const Image = styled.img `
    width: 342px;
    height: 354px;
    margin: 11px 36px 25px;
`
export const ContainerItens = styled.div `
    display: flex;
    flex-direction: column;    
    height: 100%;
    min-height: calc(100vh - 354px);
`
export const H1 = styled.h1 `
    color: #FFFFFF;
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
`

export const Order = styled.li `
    display: flex;
    justify-content: space-between;
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    padding: 17px 27px;
    border: none;
    outline: none;
    margin-top: 10px;

    p {
        font-weight: 300;
        font-size: 15px;
        line-height: 21px;
        color: #FFFFFF;
    }
    button {
    background: none;
    border: none;
    cursor: pointer;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`
export const GetBack = styled.button `
    width: 342px;
    height: 68px;
    background: rgba(255, 255, 255, 0.14);
    border-radius: 14px;
    margin-top: 60px;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover { 
        opacity: 0.8;
    }
    &:active {
        opacity: 0.5;
    }


`