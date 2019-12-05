import React, { useState } from "react";
import styled from "styled-components";

const SearchDiv = styled.div`
display: flex;
width: 75vw;
height: 10vh;
margin-top: 4rem;
margin-left: 3rem;
margin-right: 3rem;
align-items: center;
justify-content: center;
@media (min-width: 1024px) {
  width: 55vw;
  margin-left: 15rem;
}
`;
const Input = styled.input`
width: 68vw;
margin: auto;
border: none;
border-bottom: 1px solid #738FA7;
padding-left 2rem;
float: left;
font-family: 'Open Sans', sans-serif;
font-size: 1.5rem;
outline: none;
@media (min-width: 1024px) {
  width: 28vw;
}
`;
const Button = styled.button`
width: 5rem;
height: 2.1rem;
float: left;
margin-left: -3.8rem;
color: white;
background-color: #738FA7;
border: 1px solid #0C4160;
border-radius: 2px;
outline: none;
cursor: pointer;
&:hover{
  background-color: #E1C340;
}
@media (min-width: 1024px) {
  margin-left: -17rem;
}
`;
const SearchBar = props => {
    const {setResult} = props;
    const [input, setInput] = useState("");
    const baseApi =`https://api.soundcloud.com/tracks.json?client_id=${REACT_APP_API_KEY}&q=${input}&limit=15`;
// sets user input to state
 const userInput = (e) => {
   setInput(e.target.value);
 };
 const filterArr = (arr) => {
   const imageFilter = (item) => {
     return item.artwork_url? true: false;
   };
   return arr.filter(imageFilter);

 }
 // api request - result is set to state
 const fetchData = (e) => {
   const top = e.target.parentNode.parentNode
   const arrlist = top.childNodes;
   // remove previous results from display
   // eslint-disable-next-line no-plusplus
   for(let i=2; i<arrlist.length; i++){
     arrlist[i].style.display = "none";
   }
   // remove text from searchbox
   e.target.previousSibling.value = ""
   // filters and set results into state
      fetch(baseApi)
       .then(res =>res.json())
       .then(json => filterArr(json))
       .then(arr => setResult(arr));
 }
   return(
   <SearchDiv>
        <Input type="text" placeholder="...track search"
        onChange={userInput}
         />
        <Button type="submit" onClick={fetchData}>search</Button>
    </SearchDiv>
   )
}
export default SearchBar