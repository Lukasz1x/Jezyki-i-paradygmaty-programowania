sumOfDigits:: Int -> Int
sumOfDigits x 
  | x < 0 = sumOfDigits ((-1) * x)
  | x < 10 = x
  | otherwise = x `mod` 10 + sumOfDigits (x `div` 10)


main :: IO ()
main = do
  print(sumOfDigits 12345678267)
  print(sumOfDigits (-12345678267))
