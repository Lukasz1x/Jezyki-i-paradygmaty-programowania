fib x
  | x == 0 = 0
  | x == 1 = 1
  | otherwise = fib (x - 1) + fib (x - 2)
  
main::IO()
main = do
  print(fib 5)
  print(fib 4)
  print(fib 1)
  print(fib 11)