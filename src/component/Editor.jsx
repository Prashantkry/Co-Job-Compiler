import React, { useState } from "react";
import "../App.css";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

const HeadingBox = styled(Box)`
  background: #1d1e22;
  padding: 10px 12px;
  display: flex;
  font-weight: 700;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  color: #aaaebc;
  background: #060606;
`;

const Con = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;
const Editor = ({ heading, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    // by default it take 3 arguments editor,data,value
    onChange(value);
  };
  return (
    <>
      {/* flex-grow had been used here to handle compiler box open or close  */}
      <Con style={open ? null : { flexGrow: 0 }}>
        <Header>
          <HeadingBox>
            <Box
              component="span"
              style={{
                background: color,
                display: "flex",
                height: 22,
                width: 20,
                borderRadius: 5,
                placeContent: "center",
                marginRight: 5,
                paddingBottom: 2,
                color: "#000",
              }}
            >
              {icon}
            </Box>
            {heading}
          </HeadingBox>
          <CloseFullscreenIcon
            fontSize="small"
            style={{ alignSelf: "center" }}
            onClick={() => setOpen((prevState) => !prevState)}
          />
        </Header>
        <ControlEditor
          className="controlled-editor"
          value={value}
          onBeforeChange={handleChange}
          options={{
            // handle the code input type & line no
            mode: "xml",
            theme: "material",
            lineNumbers: true,
          }}
        />
      </Con>
    </>
  );
};

export default Editor;
