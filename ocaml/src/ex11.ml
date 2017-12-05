open Batteries

let getValue first second =
  match first with
    | second -> Num.of_float_string second |> Num.to_int
    | _ -> 0

let rec recSequential input first total =
  match input with
    | [] -> total
    | el :: [] -> total + getValue el first
    | hd :: second :: tl -> recSequential (second :: tl) first ((getValue hd second) + total)

let computeSequentialValue str =
  let input = List.map String.of_char (String.to_list str) in
    let value = recSequential input (List.first input) 0 in
    value
