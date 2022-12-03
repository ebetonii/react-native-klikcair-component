"use strict";
exports.__esModule = true;
exports.CenterView = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var CenterView = function (props) {
    return React.createElement(react_native_1.View, { style: styles.main }, props.children);
};
exports.CenterView = CenterView;
var styles = react_native_1.StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
});
