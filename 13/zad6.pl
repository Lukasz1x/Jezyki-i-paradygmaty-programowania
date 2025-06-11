% Szukamy wszystkich sposobów usunięcia jednego elementu z listy
% ?- select(X, [1,2,3], L).
% X = 1, L = [2, 3] ;
% X = 2, L = [1, 3] ;
% X = 3, L = [1, 2] ;

% Wstawianie elementu na różne pozycje
% ?- select(a, L, [1,2,3]).
% L = [a, 1, 2, 3] ;
% L = [1, a, 2, 3] ;
% L = [1, 2, a, 3] ;
% L = [1, 2, 3, a] ;