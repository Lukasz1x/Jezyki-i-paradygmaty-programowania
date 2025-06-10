addMe :: Integer -> Integer -> Integer
addMe x y = x + y

main :: IO ()
main =  do
  putStr "Sum of x + y = "
  print(10 `addMe` 25)