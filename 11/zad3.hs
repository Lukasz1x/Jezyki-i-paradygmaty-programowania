rownanie :: Float -> Float -> Float -> [Float]
rownanie a b c 
  | delta < 0 = []
  | delta == 0 = [x1]
  | otherwise = [x1, x2]
  where
    delta = b^2 - 4*a*c
    sqrtDelta = sqrt delta
    x1 = (-b - sqrtDelta) / (2*a)
    x2 = (-b + sqrtDelta) / (2*a)
    
rownanie2 :: Float -> Float -> Float -> [Float]
rownanie2 a b c = 
  if delta < 0 
    then []
  else if delta == 0
    then [x1]
  else [x1,x2]
  where 
    delta = b^2 - 4*a*c
    sqrtDelta = sqrt delta
    x1 = (-b - sqrtDelta) / (2*a)
    x2 = (-b + sqrtDelta) / (2*a)

main :: IO ()
main =  do
  print(rownanie 1 4 6)
  print(rownanie 1 2 1)
  print(rownanie 5 8 2)
  print(rownanie2 1 4 6)
  print(rownanie2 1 2 1)
  print(rownanie2 5 8 2)
  