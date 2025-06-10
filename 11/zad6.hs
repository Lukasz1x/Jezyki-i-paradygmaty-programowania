minmax x y z
  | x >= y && y >= z = x-z
  | x >= z && z >= y = x-y
  | y >= x && x >= z = y-z
  | y >= z && z >= x = y-x
  | z >= x && x >= y = z-y
  | otherwise = z-x
  
main::IO()
main = do
  print(minmax 5 6 7)
  print(minmax 2 1 3)
  print(minmax 4 2 3)
  print(minmax 8 5 3)
  print(minmax 1 9 3)
  print(minmax 4 9 3)
  