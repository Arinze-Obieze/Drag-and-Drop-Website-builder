"use client";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import React, { useState, useEffect } from "react";
import PWP from "grapesjs-preset-webpage";
import grapesjsStyleBg from "grapesjs-style-bg";
import grapesjsPluginExport from "grapesjs-plugin-export";
import { styleManager } from "@/utlis/stylemanager";
import customCode from "grapesjs-custom-code";
import "grapesjs-blocks-basic";
import toolTip from "grapesjs-tooltip";
import "grapesjs-typed";
import form from "grapesjs-plugin-forms";
import navBar from "grapesjs-navbar";
import flexBox from "grapesjs-blocks-flexbox";
import "grapesjs-lory-slider";
function Editor() {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [
        PWP,
        grapesjsStyleBg,
        form,
        "grapesjs-lory-slider",
        navBar,
        flexBox,
        grapesjsPluginExport,
        customCode,
        toolTip,
      ],
      pluginsOpts: {
        PWP: {},
      },
      PWP: {
        modalImportTitle: "Import Template",
        modalImportLabel:
          '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
        modalImportContent: function (editor) {
          return editor.getHtml() + "<style>" + editor.getCss() + "</style>";
        },
      },

      "grapesjs-blocks-basic": { flexGrid: true },
      styleManager: styleManager,
      "grapesjs-typed": {
        block: {
          category: "Extra",
          content: {
            type: "typed",
            "type-speed": 40,
            strings: ["Text row one", "Text row two", "Text row three"],
          },
        },
      },
    });

    setEditor(editor);
  }, []);
  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}
export default Editor;
