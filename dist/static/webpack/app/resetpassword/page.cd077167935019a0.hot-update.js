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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResetPassword; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ \"(app-pages-browser)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Add the missing import statement for 'supabase'\nfunction ResetPassword() {\n    _s();\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(\"https://qyyoebsjxzkhtusqwqdc.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5eW9lYnNqeHpraHR1c3F3cWRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1NDI1MjQsImV4cCI6MjAzMTExODUyNH0.pZmSQVPAH8vvELkFY4GDlHm2hc5FLChBmWtRQ17WHW0\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        if (password !== confirmPassword) {\n            alert(\"Passwords do not match\");\n            return;\n        }\n        await supabase.auth.updateUser({\n            password: password\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1 flex flex-col w-full px-8 sm:max-w-md gap-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"animate-in flex-1 flex flex-col w-full gap-2 text-foreground pt-24\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"text-md\",\n                        htmlFor: \"email\",\n                        children: \"New Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-md px-4 py-2 bg-inherit border mb-6\",\n                        type: \"password\",\n                        name: \"password\",\n                        placeholder: \"••••••••\",\n                        required: true,\n                        onChange: (e)=>setPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"text-md\",\n                        htmlFor: \"password\",\n                        children: \"Confirm Password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-md px-4 py-2 bg-inherit border mb-6\",\n                        type: \"password\",\n                        name: \"confirmPassword\",\n                        placeholder: \"••••••••\",\n                        required: true,\n                        onChange: (e)=>setConfirmPassword(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-full\"\n            }, void 0, false, {\n                fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hitigome/tuned-nation/app/resetpassword/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_s(ResetPassword, \"k6QM2p6XxMwdeUv1T6qyeuSW9NA=\");\n_c = ResetPassword;\nvar _c;\n$RefreshReg$(_c, \"ResetPassword\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZXNldHBhc3N3b3JkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFDb0IsQ0FBQyxrREFBa0Q7QUFFekYsU0FBU0U7O0lBR3BCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNLLGlCQUFpQkMsbUJBQW1CLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU1PLFdBQVdOLG1FQUFZQSxDQUFDLDRDQUE0QztJQUUxRSxNQUFNTyxlQUFlLE9BQU9DO1FBQ3hCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUdQLGFBQWFFLGlCQUFpQjtZQUM3Qk0sTUFBTTtZQUNOO1FBQ0o7UUFFQSxNQUFNSixTQUFTSyxJQUFJLENBQUNDLFVBQVUsQ0FBQztZQUFFVixVQUFVQTtRQUFTO0lBQ3hEO0lBRUEscUJBQ0ksOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBS0QsV0FBVTs7a0NBQ1osOERBQUNFO3dCQUFNRixXQUFVO3dCQUFVRyxTQUFRO2tDQUFROzs7Ozs7a0NBQzNDLDhEQUFDQzt3QkFDR0osV0FBVTt3QkFDVkssTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsUUFBUTt3QkFDUkMsVUFBVSxDQUFDQyxJQUFNckIsWUFBWXFCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7O2tDQUUvQyw4REFBQ1Y7d0JBQU1GLFdBQVU7d0JBQVVHLFNBQVE7a0NBQVc7Ozs7OztrQ0FDOUMsOERBQUNDO3dCQUNESixXQUFVO3dCQUNWSyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxRQUFRO3dCQUNSQyxVQUFVLENBQUNDLElBQU1uQixtQkFBbUJtQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7OzswQkFHdEQsOERBQUNDO2dCQUFPYixXQUFVOzs7Ozs7Ozs7Ozs7QUFHOUI7R0EzQ3dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcmVzZXRwYXNzd29yZC9wYWdlLnRzeD84ZjgwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiOyAvLyBBZGQgdGhlIG1pc3NpbmcgaW1wb3J0IHN0YXRlbWVudCBmb3IgJ3N1cGFiYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNldFBhc3N3b3JkKCkge1xuXG5cbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtjb25maXJtUGFzc3dvcmQsIHNldENvbmZpcm1QYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudCgnaHR0cHM6Ly9xeXlvZWJzanh6a2h0dXNxd3FkYy5zdXBhYmFzZS5jbycsICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbkY1ZVc5bFluTnFlSHByYUhSMWMzRjNjV1JqSWl3aWNtOXNaU0k2SW1GdWIyNGlMQ0pwWVhRaU9qRTNNVFUxTkRJMU1qUXNJbVY0Y0NJNk1qQXpNVEV4T0RVeU5IMC5wWm1TUVZQQUg4dnZFTGtGWTRHRGxIbTJoYzVGTENoQm1XdFJRMTdXSFcwJylcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZihwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICBhbGVydChcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gICBcblxuICAgICAgICBhd2FpdCBzdXBhYmFzZS5hdXRoLnVwZGF0ZVVzZXIoeyBwYXNzd29yZDogcGFzc3dvcmQgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIHctZnVsbCBweC04IHNtOm1heC13LW1kIGdhcC0yXCI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhbmltYXRlLWluIGZsZXgtMSBmbGV4IGZsZXgtY29sIHctZnVsbCBnYXAtMiB0ZXh0LWZvcmVncm91bmQgcHQtMjRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tZFwiIGh0bWxGb3I9XCJlbWFpbFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgcHgtNCBweS0yIGJnLWluaGVyaXQgYm9yZGVyIG1iLTZcIiBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLigKLigKLigKLigKLigKLigKLigKLigKJcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW1kXCIgaHRtbEZvcj1cInBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBweC00IHB5LTIgYmctaW5oZXJpdCBib3JkZXIgbWItNlwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbmZpcm1QYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz4gIFxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNsaWVudCIsIlJlc2V0UGFzc3dvcmQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwic2V0Q29uZmlybVBhc3N3b3JkIiwic3VwYWJhc2UiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJhdXRoIiwidXBkYXRlVXNlciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/resetpassword/page.tsx\n"));

/***/ })

});