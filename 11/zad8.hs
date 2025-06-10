lastDigit x
  | x < 0 = lastDigit(x * (-1))
  | otherwise = x `mod` 10
  
main::IO()
main = do
  print(lastDigit 56)
  print(lastDigit 23)
  print(lastDigit 833)
  print(lastDigit 93)
  print(lastDigit 436)
  print(lastDigit (-17))
  