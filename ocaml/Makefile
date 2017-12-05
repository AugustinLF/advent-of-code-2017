# https://github.com/ocaml/ocamlbuild/blob/master/examples/03-packages/Makefile
OCB_FLAGS = -use-ocamlfind -I src -I tests
OCB = 		ocamlbuild $(OCB_FLAGS)

all: 		test

byte:
			$(OCB) ex11.byte

test:
			$(OCB) ex11Test.byte && ./ex11Test.byte

.PHONY: 	all byte test
