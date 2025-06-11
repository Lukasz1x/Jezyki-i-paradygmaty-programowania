% Łączenie list (najczęstsze użycie)
% ?- append([olej], [woda], [olej, woda]).
% true.

% Znajdowanie wyniku łączenia
% ?- append([olej], [woda], Co).
% Co = [olej, woda].

% Rozdzielanie listy na dwie części
% ?- append([olej], Co, [olej, woda]).
% Co = [woda].