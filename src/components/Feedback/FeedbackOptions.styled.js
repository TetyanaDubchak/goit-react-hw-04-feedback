import styled from 'styled-components'

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    margin-bottom: 50px;
`
export const Button = styled.button`
    min-width: 80px;
    padding: 10px;
    cursor: pointer;
    border-color: transparent;
    background-color: bisque;
    &:hover{
        background-color: gold;
        color: white;
        
    }
`
