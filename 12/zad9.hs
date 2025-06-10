doubleAll::[Int] -> [Int]
doubleAll [] = []
doubleAll (first:rest) = (2*first) : doubleAll rest

main :: IO ()
main = do
  print(doubleAll [1,2,3,4,5,6,7,8,2,6,7])
