import React, { useState } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import Header from "./components/heading";
import SearchBar from "./components/searchBar";
import ResultCard from "./components/resultCard";


const App = () => {
  
  const [result, setResult] = useState([]);
  return (
    <>
    <GlobalStyle />
    <Header />
    <SearchBar
    setResult={setResult}
     />
     {
       result.map((ele) => {
        // eslint-disable-next-line react/jsx-key
        return <ResultCard
          key={ele.id}
          imgScr={ele.album.cover_medium}
          title={ele.artist.name}
          track={ele.title}
          link={ele.preview}
          />
       })
     }
  </>
  );
}

export default App;
