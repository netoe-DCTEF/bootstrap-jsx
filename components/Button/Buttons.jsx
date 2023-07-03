import React from "react";
import { verifyValidButtons, verifyValidTypeHtml } from "./Buttons.jsx";
export const BSButton = (title, BSTypeOfButton, widthGrid, htmlTypeOfButton) => {
  // Avoid unnecessary erros with JS types.
  title = title.toString();

  if (verifyValidButtons(BSTypeOfButton.toString())) {
    if (verifyValidSize(widthGrid)) {
      if (verifyValidTypeHtml(htmlTypeOfButton)) {
        return (
          <button type={htmlTypeOfButton.toLower()} className={"btn btn-" + BSTypeOfButton.toLower()}>{title}</button>
        );
      }
      else {
        return (console.logError("BSButton ERROR:Invalid button type in html: '" + typeOfButton.toString() + "'"));
      }
    }
    else {
      return (console.logError("BSButton ERROR:Invalid type of BSWidth: '" + typeOfButton.toString() + "'"));
    }
  }
  else {
    return console.logError("BSButton ERROR:Invalid type ButtonBSType: '" + typeOfButton.toString() + "'");
  }
};
