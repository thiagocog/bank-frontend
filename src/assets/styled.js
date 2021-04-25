import styled from "styled-components"


const TitlePage = styled.div`
    color: #42145F;
    font-size:22px;
    margin-bottom: 10px;
    font-weight:bold;
    /* border-bottom: 1px dotted #4b8EC7; */
    box-shadow: 2px 2px 6px rgba(206, 59, 87,0.3);
    padding: 5px;
    display:flex;
    justify-content: space-between;

`



const Sign = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:100%;
    min-height:100%;
`

export {
    Sign,
    TitlePage
}
