import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [togglesearch, setTogglesearch] = useState(false);

  const handleShowSearch = () => {
    setTogglesearch(true);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        togglesearch,
        setTogglesearch,
        handleShowSearch,
        handleChange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
