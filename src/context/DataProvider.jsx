import React, { createContext, useState } from "react";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  // below all 3 html css js are in form of string it had to be converted as html docs
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
