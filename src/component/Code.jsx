import React, { useContext } from "react";
import Editor from "./Editor";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { DataContext } from "../context/DataProvider";
const Con = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Con>
      <Editor
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
      />
      <Editor
        heading="JavaScript"
        icon="()"
        color="#FCD000"
        value={js}
        onChange={setJs}
      />
    </Con>
  );
};

export default Code;
