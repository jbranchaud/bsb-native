// Generated CODE, PLEASE EDIT WITH CARE
'use strict';

var Caml_builtin_exceptions = require("../runtime/caml_builtin_exceptions");

function f(param) {
  switch (param) {
    case "abcd" : 
        return 0;
    case "bcde" : 
        return 1;
    default:
      throw [
            0,
            Caml_builtin_exceptions.Assert_failure,
            [
              0,
              "test_string_case.ml",
              4,
              9
            ]
          ];
  }
}

exports.f = f;
/* No side effect */
