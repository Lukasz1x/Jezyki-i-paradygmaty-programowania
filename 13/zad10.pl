ostatni(X, [X]).
ostatni(X, [_|Y]) :- ostatni(X, Y).

% ostatni(6, [1, 2, 3, 4, 5, 6]).