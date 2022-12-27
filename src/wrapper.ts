import styled from "styled-components"

const StyledCard = styled.li`

display: flex;
justify-content: space-between;
padding: 20px;
min-height: 50px;
align-items: center;
border-radius: 10px;
-webkit-box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
-moz-box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
transition: 0.4s ease-out;

&:hover,
&:focus {
  color: #5965c6;
  transform: translateY(-5px);
}
    `
const ButtonWrapper = styled.div`

    display: flex;
    gap: 20px;
    padding-left: 50px;
        `

const StyledButton = styled.button`
    background: transparent;
    cursor: pointer;
    border: none;
    `

const InputWrapper = styled.div`
display: flex;
gap: 50px;
padding: 50px;
    `

const Input = styled.input`
display: flex;
padding: 20px;
width: 500px;
border-radius: 5px;
border: 1px solid grey;
font-size: 20px;
    `

const ListWrapper = styled.div`
    width: 50%;
    text-align: center;
    `
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `
const Container = styled.div`
    padding: 50px;
    display: grid;
    justify-items: center;
    `
const Lists = styled.div`
    display: flex;
    gap: 50px;
    `
const CardTitle = styled.p`
    color: #353539;
    weight: 500;
    `


export { StyledCard, StyledButton, ButtonWrapper, InputWrapper, Input, ListWrapper, List, Container, Lists, CardTitle }