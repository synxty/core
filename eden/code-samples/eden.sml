(*
* Eden is full of beautiful islands...
*)

structure Island = struct
  type params = {name: string,
                 length: int,
                 width: int,
                 features: string list}
  type island = params
  fun new (i : params) : island = i
  fun area (i : island) : int = (#length i) * (#width i)
end

(* ...one of them is named Elysian *)

structure Romainia = struct
  val elysian = Island.new {name="Elysian",
                             length=300,
                             width=350,
                             features=["Sunsets", "Beaches"]}
end
