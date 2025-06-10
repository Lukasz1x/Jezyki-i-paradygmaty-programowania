square :: Integer -> Integer
square x = x * x

cube :: Integer -> Integer
cube x = x * x * x

average :: Float -> Float -> Float
average x y = (x + y)/2

main :: IO ()
main =  do
  print(square 5)
  print(cube 6)
  print(average 6 5)