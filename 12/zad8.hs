onlyEven::[Int] -> [Int]
onlyEven [] = []
onlyEven (first:rest)
  | first `mod` 2 == 0 = first : onlyEven rest
  | otherwise = onlyEven rest

main :: IO ()
main = do
  print(onlyEven [1,2,3,4,5,6,7,8,2,6,7])
