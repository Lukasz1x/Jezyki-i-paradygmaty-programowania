suma([], 0).
suma([X|Y], S0) :- suma(Y, S1), S0 is X + S1.

% suma([1, 2, 3, 4, 5, 6], S).