odwroc([], []).
odwroc([X|Y], O) :- odwroc(Y, O1), append(O1, [X], O).

% odwroc([1, 2, 3, 4, 5, 6], A).