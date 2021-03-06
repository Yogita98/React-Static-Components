import * as fs from "fs";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Fxa from "./Fxa"

const HelloWorldPage = () => {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>User Subscribed</title>
        </head>
        <body>
          <h1>Welcome to my newsletter</h1>
        </body>
      </html>
    );
  }

render();

function render() {
  let html = ReactDOMServer.renderToStaticMarkup(<HelloWorldPage />);
  let html2 = ReactDOMServer.renderToStaticMarkup(<Fxa />)
  let htmlWDoc = "<!DOCTYPE html>" + html + html2;
  let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
  let outputFile = "./output.html";
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

