"use strict";

/*;
  @module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Biyaheroes Developers
		@email: developers@biyaheroes.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
  @end-module-license

  @module-configuration:
	{
	  "package": "bh-mj-form",
	  "path": "bh-mj-form/form.jsx",
	  "file": "form.jsx",
	  "module": "form",
	  "author": "Biyaheroes Developers",
	  "contributors": [
		"Robot Biyaheroes <robot@biyaheroes.com>",
		"Vinse Vinalon <vinsevinalon@gmail.com>"
	  ],
	  "eMail": "developers@biyaheroes.com",
	  "repository": "https://github.com/Biyaheroes/bh-mj-form.git",
	  "global": true
	}
  @end-module-configuration

  @module-documentation:
	Biyaheroes MJML Focus Detail Component
  @end-module-documentation

  @include:
	{
	  "MJMLElement": "mjml-core",
	  "React": "react",
	  "Component": "react.Component",
	  "Column": "mjml-column",
	  "Table": "mjml-table",
	  "wichevr": "wichevr"
	}
  @end-include
*/Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require("babel-runtime/helpers/extends");var _extends3=_interopRequireDefault(_extends2);var _jsx2=require("babel-runtime/helpers/jsx");var _jsx3=_interopRequireDefault(_jsx2);var _getPrototypeOf=require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=require("babel-runtime/helpers/classCallCheck");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require("babel-runtime/helpers/createClass");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require("babel-runtime/helpers/inherits");var _inherits3=_interopRequireDefault(_inherits2);var _class;

var _mjmlCore=require("mjml-core");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _mjmlColumn=require("mjml-column");var _mjmlColumn2=_interopRequireDefault(_mjmlColumn);
var _mjmlDivider=require("mjml-divider");var _mjmlDivider2=_interopRequireDefault(_mjmlDivider);
var _mjmlSection=require("mjml-section");var _mjmlSection2=_interopRequireDefault(_mjmlSection);
var _mjmlText=require("mjml-text");var _mjmlText2=_interopRequireDefault(_mjmlText);
var _wichevr=require("wichevr");var _wichevr2=_interopRequireDefault(_wichevr);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var tagName="mj-form";

var parentTag=["mj-container"];

var endingTag=false;

var defaultMJMLDefinition={
"content":"",
"attributes":{
"label":"Label",
"value-color":"black"}};var




Form=(0,_mjmlCore.MJMLElement)(_class=function(_Component){(0,_inherits3.default)(Form,_Component);function Form(){(0,_classCallCheck3.default)(this,Form);return(0,_possibleConstructorReturn3.default)(this,(Form.__proto__||(0,_getPrototypeOf2.default)(Form)).apply(this,arguments));}(0,_createClass3.default)(Form,[{key:"render",value:function render()
{var
mjAttribute=this.props.mjAttribute;

return(
_react2.default.createElement(_mjmlSection2.default,(0,_extends3.default)({},
this.props,{
padding:"0px 0px 0px 0px",
"background-color":mjAttribute("value-color")}),(0,_jsx3.default)(_mjmlColumn2.default,{width:


"70%","background-color":
mjAttribute("label-color")},void 0,(0,_jsx3.default)(_mjmlText2.default,{"font-size":


"16px","font-weight":
"500","letter-spacing":
"0.3px"},void 0,
(0,_wichevr2.default)(mjAttribute("title"),mjAttribute("label")))),(0,_jsx3.default)(_mjmlDivider2.default,{"background-color":



mjAttribute("value-color")},void 0)));



}}]);return Form;}(_react.Component))||_class;


Form.tagName=tagName;
Form.parentTag=parentTag;
Form.endingTag=endingTag;
Form.defaultMJMLDefinition=defaultMJMLDefinition;exports.default=

Form;

//# sourceMappingURL=form.js.map