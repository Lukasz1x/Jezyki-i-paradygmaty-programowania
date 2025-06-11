color(red, blue).
color(red, green).
color(blue, red).
color(blue, green).
color(green, red).
color(green, blue).

sasiad(Po,Lu,Ma,Pd,Wm) :- 
    color(Po,Lu),
    color(Lu,Po),
    color(Lu,Ma),
    color(Lu,Pd),
    color(Ma,Lu),
    color(Ma,Pd),
    color(Ma,Wm),
    color(Pd,Lu),
    color(Pd,Ma),
    color(Pd,Wm),
    color(Wm,Ma),
    color(Wm,Pd).

%sasiad(A, B, C, D, E).