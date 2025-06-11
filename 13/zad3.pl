nwd(A, B, W) :- A =:= B, W is A.
nwd(A, B, W) :- A > B, nwd(A-B, B, W).
nwd(A, B, W) :- A < B, nwd(A, B-A, W).

%nwd(20, 15, W).