silnia x
  | x == 0    = 1
  | otherwise = silnia (x - 1) * x
  
main::IO()
main = do
  print(silnia 5)
  print(silnia 4)
  print(silnia 0)