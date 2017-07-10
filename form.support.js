"use strict";function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}Object.defineProperty(exports, "__esModule", { value: !0 });var _extends2 = require("babel-runtime/helpers/extends"),_extends3 = _interopRequireDefault(_extends2),_getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of"),_getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf),_classCallCheck2 = require("babel-runtime/helpers/classCallCheck"),_classCallCheck3 = _interopRequireDefault(_classCallCheck2),_createClass2 = require("babel-runtime/helpers/createClass"),_createClass3 = _interopRequireDefault(_createClass2),_possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn"),_possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2),_inherits2 = require("babel-runtime/helpers/inherits"),_inherits3 = _interopRequireDefault(_inherits2),_class,_mjmlCore = require("mjml-core"),_react = require("react"),_react2 = _interopRequireDefault(_react),_mjmlColumn = require("mjml-column"),_mjmlColumn2 = _interopRequireDefault(_mjmlColumn),_mjmlDivider = require("mjml-divider"),_mjmlDivider2 = _interopRequireDefault(_mjmlDivider),_mjmlSection = require("mjml-section"),_mjmlSection2 = _interopRequireDefault(_mjmlSection),_mjmlText = require("mjml-text"),_mjmlText2 = _interopRequireDefault(_mjmlText),_wichevr = require("wichevr"),_wichevr2 = _interopRequireDefault(_wichevr),tagName = "mj-form",parentTag = ["mj-container"],endingTag = !1,defaultMJMLDefinition = { content: "", attributes: { label: "Label", "value-color": "black" } },Form = (0, _mjmlCore.MJMLElement)(_class = function (_Component) {function Form() {return (0, _classCallCheck3.default)(this, Form), (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).apply(this, arguments));}return (0, _inherits3.default)(Form, _Component), (0, _createClass3.default)(Form, [{ key: "render", value: function render() {var mjAttribute = this.props.mjAttribute;return _react2.default.createElement(_mjmlSection2.default, (0, _extends3.default)({}, this.props, { padding: "0px 0px 0px 0px", "background-color": mjAttribute("value-color") }), _react2.default.createElement(_mjmlColumn2.default, { width: "70%", "background-color": mjAttribute("label-color") }, _react2.default.createElement(_mjmlText2.default, { "font-size": "16px", "font-weight": "500", "letter-spacing": "0.3px" }, (0, _wichevr2.default)(mjAttribute("title"), mjAttribute("label")))), _react2.default.createElement(_mjmlDivider2.default, { "background-color": mjAttribute("value-color") }));} }]), Form;}(_react.Component)) || _class;Form.tagName = tagName, Form.parentTag = parentTag, Form.endingTag = endingTag, Form.defaultMJMLDefinition = defaultMJMLDefinition, exports.default = Form;
//# sourceMappingURL=form.js.map

//# sourceMappingURL=form.support.js.map