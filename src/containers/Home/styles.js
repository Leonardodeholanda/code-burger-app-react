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
    
    
`
export const H1 = styled.h1 `
    color: #FFFFFF;
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
`
export const Label = styled.p `
margin-left: 15px;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;
`
export const Input = styled.input `
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    margin-bottom: 42px;
    padding: 19px 15px;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    border: none;
    outline: none;
    color: #FFFFFF;

`
export const Button = styled.button `
    width: 342px;
    height: 68px;
    background: #D93856;
    margin-top: 56px;
    border-radius: 14px;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #ffffff;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover { 
        opacity: 0.8;
    }
    &:active {
        opacity: 0.5;
    }
    
`

