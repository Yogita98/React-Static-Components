import React from "react";
import { render } from "react-dom";
import ReactDOMServer from "react-dom/server";
const styles = {
fontFamily: "Times",
textAlign: "center"
};
const App = props => (
<div style={styles}>
<h2>
{props.message} {"\u2725"}
</h2>
</div>
);
document.getElementById("button-1").onclick = () => {
render(
<App message="It is Rendered using render()." />,
document.getElementById("root-1")
);
};
document.getElementById("button-2").onclick = () => {
const element = ReactDOMServer.renderToStaticMarkup(
<App message="It is Rendered using renderToStaticMarkup()." />
);
document.getElementById("root-2").innerHTML = element;
};