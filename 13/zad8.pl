długość([], 0).
długość([_|X], D0) :- długość(X, D1), D0 is D1 + 1.

% długość([a, b, c, d], Dł).