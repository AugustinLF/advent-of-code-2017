open OUnit2


let test_operation =
    "EX11" >:::
    [
        "first example" >:: (fun test_ctxt -> assert_equal (Ex11.computeSequentialValue "1122") 3)
    ]

let () = run_test_tt_main test_operation
