let n = Test.create "10" 10
let b = match Js.Null.toOption n with 
| None -> assert false
| Some n -> n

let _ = print_endline (Test.key b)
