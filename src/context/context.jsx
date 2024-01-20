import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataSet, setDataSet] = useState([]);
  const [searched, setSearched] = useState(false);

  const api = "41894234-11cdb2a75bfe109dbdfd692d4";

  async function fetchImages(searchVal) {
    setSearchTerm(searchVal);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${api}&q=${searchVal}`
      );
      const data = await response.json();
      setDataSet(data.hits);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        fetchImages,
        dataSet,
        searched,
        setSearched,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
