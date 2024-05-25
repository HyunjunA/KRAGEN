"use strict";
exports.__esModule = true;
var react_1 = require("react");
var rete_react_plugin_1 = require("rete-react-plugin");
var logo_svg_1 = require("./logo.svg");
require("./App.css");
require("./rete.css");
var rete_1 = require("./rete");
function VISPROG() {
    var ref = rete_react_plugin_1.useRete(rete_1.createEditor)[0];
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo", style: { animation: "none" } }),
            react_1["default"].createElement("a", { className: "App-link", href: "https://rete.js.org", target: "_blank", rel: "noopener noreferrer" }, "Learn Rete.js"),
            react_1["default"].createElement("div", { ref: ref, className: "rete" }))));
}
exports["default"] = VISPROG;
