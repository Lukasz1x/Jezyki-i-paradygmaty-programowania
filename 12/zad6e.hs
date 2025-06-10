split:: Ord a => a -> [a] -> ([a],[a])
split x [] = ([], [])
split x (first:rest)
  | first < x = (first : left, right)
  | x == first = (left, right)
  | otherwise = (left, first : right)
  where (left, right) = split x rest

main :: IO ()
main = do
  print(split 5 [1,2,3,4,5,6,7,8,2,6,7])
