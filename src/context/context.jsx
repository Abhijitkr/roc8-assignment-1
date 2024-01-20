import { createContext, useState } from "react";
import useLocalStorage from "../custom-hook/useLocalStorage";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataSet, setDataSet] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useLocalStorage(
    "searchHistory",
    []
  );

  const api = "41894234-11cdb2a75bfe109dbdfd692d4";

  async function fetchImages(searchVal) {
    setSearchTerm(searchVal);
    try {
      setLoading(true);
      const response = await fetch(
        `https://pixabay.com/api/?key=${api}&q=${searchVal}`
      );
      const data = await response.json();
      setDataSet(data.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function saveHistory(searchItem) {
    const updatedHistory = [searchItem, ...searchHistory].slice(0, 10);
    setSearchHistory(updatedHistory);
  }

  function handleHistory(search) {
    setSearchTerm(search);
    saveHistory(search);
    fetchImages(search);
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
        loading,
        searchHistory,
        setSearchHistory,
        handleHistory,
        saveHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
