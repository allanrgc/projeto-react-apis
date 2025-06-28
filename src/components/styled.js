import styled from "styled-components"



export const BodyContainer = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // height: 40vh;
    // width: 100vw;
`

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: white;
    height: 10rem;
    width: 100vw;

`
export const StyledButtonIntern = styled.button`
background: transparent;
margin: 0.25em 1em;
border: none;
font-weight: 700;
height: 7rem;
position: absolute;
left: 0;
text-decoration: underline;
`
export const StyledButton = styled.button`
background: #33A4F5;
border-radius: 0.5rem;
border: none;
color: #fff;

margin: 0.25rem 0.625rem;
width: 18rem;
height: 4.625rem;
position: absolute;
right: 0;
&:hover {
    color: none;
    cursor: pointer;
    box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem #000000;

}
`

export const MainContainer = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 64px;
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    width: 100vw;
    background: #606060;
`

