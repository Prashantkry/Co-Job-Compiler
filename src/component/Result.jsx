import React, { useContext, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";
const Result = () => {
  const [ src, setSrc ] = useState("");
  const { html, css, js } = useContext(DataContext);

  //   setting height of output box
  const Container = styled(Box)`
    height: 40vh;
  `;

  // handling all code of html css js
  const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `;

  useEffect(() => {
    const timer = setTimeout(() => {
      //used to update DOM in 1 sec
      setSrc(srcCode);
    }, 1000);
    return () => clearTimeout(timer);
    //eslint-disable-next-line
  }, [html, css, js]);
  return (
    <Container>
      {/* i frame use to display all code of html css js  */}
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts"
        frameBorder={0}
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
