potrzebuje(p1, s1).
potrzebuje(p1, s2).

potrzebuje(p2, s2).
potrzebuje(p2, s3).

potrzebuje(p3, s1).
potrzebuje(p3, s3).
potrzebuje(p3, s4).

dostepny(s1).
dostepny(s2).
dostepny(s3).

moznaprodukowac(X) :-
    \+ (potrzebuje(X, S), \+ dostepny(S)).


%moznaprodukowac(p1).
%moznaprodukowac(p2).
%moznaprodukowac(p3).