"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Modal component for displaying content in a popup
 */
function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 flex items-center justify-center bg-black/50 z-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
  }, children, /*#__PURE__*/_react["default"].createElement("button", {
    className: "mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full",
    onClick: onClose
  }, "Fermer")));
}
Modal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node.isRequired
};
var _default = exports["default"] = Modal;