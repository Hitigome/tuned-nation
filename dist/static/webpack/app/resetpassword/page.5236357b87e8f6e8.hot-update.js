"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/resetpassword/page",{

/***/ "(app-pages-browser)/./app/resetpassword/page.tsx":
/*!************************************!*\
  !*** ./app/resetpassword/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResetPassword; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction ResetPassword() {\n    _s();\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1 flex flex-col w-full px-8 sm:max-w-md gap-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"animate-in flex-1 flex flex-col w-full gap-2 text-foreground pt-24\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"text-md\",\n                    htmlFor: \"email\",\n                    children: \"New Password\"\n                }, void 0, false, {\n                    fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"rounded-md px-4 py-2 bg-inherit border mb-6\",\n                    type: \"password\",\n                    name: \"password\",\n                    placeholder: \"••••••••\",\n                    required: true,\n                    onChange: (e)=>setPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"text-md\",\n                    htmlFor: \"password\",\n                    children: \"Confirm Password\"\n                }, void 0, false, {\n                    fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"rounded-md px-4 py-2 bg-inherit border mb-6\",\n                    type: \"password\",\n                    name: \"confirmPassword\",\n                    placeholder: \"••••••••\",\n                    required: true,\n                    onChange: (e)=>setConfirmPassword(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_s(ResetPassword, \"k6QM2p6XxMwdeUv1T6qyeuSW9NA=\");\n_c = ResetPassword;\nvar _c;\n$RefreshReg$(_c, \"ResetPassword\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZXNldHBhc3N3b3JkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNpQztBQUdsQixTQUFTQzs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ksaUJBQWlCQyxtQkFBbUIsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkQsTUFBTU0sZUFBZSxPQUFPQztRQUN4QkEsTUFBTUMsY0FBYztJQUV4QjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDQztZQUFLRCxXQUFVOzs4QkFDWiw4REFBQ0U7b0JBQU1GLFdBQVU7b0JBQVVHLFNBQVE7OEJBQVE7Ozs7Ozs4QkFDM0MsOERBQUNDO29CQUNHSixXQUFVO29CQUNWSyxNQUFLO29CQUNMQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxRQUFRO29CQUNSQyxVQUFVLENBQUNDLElBQU1qQixZQUFZaUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7OEJBRS9DLDhEQUFDVjtvQkFBTUYsV0FBVTtvQkFBVUcsU0FBUTs4QkFBVzs7Ozs7OzhCQUM5Qyw4REFBQ0M7b0JBQ0RKLFdBQVU7b0JBQ1ZLLE1BQUs7b0JBQ0xDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pDLFFBQVE7b0JBQ1JDLFVBQVUsQ0FBQ0MsSUFBTWYsbUJBQW1CZSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xFO0dBakN3QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9yZXNldHBhc3N3b3JkL3BhZ2UudHN4PzhmODAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXRQYXNzd29yZCgpIHtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjb25maXJtUGFzc3dvcmQsIHNldENvbmZpcm1QYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wgdy1mdWxsIHB4LTggc206bWF4LXctbWQgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImFuaW1hdGUtaW4gZmxleC0xIGZsZXggZmxleC1jb2wgdy1mdWxsIGdhcC0yIHRleHQtZm9yZWdyb3VuZCBwdC0yNFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW1kXCIgaHRtbEZvcj1cImVtYWlsXCI+TmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBweC00IHB5LTIgYmctaW5oZXJpdCBib3JkZXIgbWItNlwiIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbWRcIiBodG1sRm9yPVwicGFzc3dvcmRcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHB4LTQgcHktMiBiZy1pbmhlcml0IGJvcmRlciBtYi02XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uZmlybVBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPiAgXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZXNldFBhc3N3b3JkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInNldENvbmZpcm1QYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/resetpassword/page.tsx\n"));

/***/ })

});