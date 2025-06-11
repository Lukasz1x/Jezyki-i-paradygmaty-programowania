%należy(A, B) :- member(A, B).

należy(A, [A|_]).
należy(A, [_|Rest]) :- należy(A, Rest).

% należy(a, [a, b, c]).