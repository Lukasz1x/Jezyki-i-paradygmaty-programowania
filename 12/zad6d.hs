delete :: Eq a => a -> [a] -> [a]
delete x [] = []
delete x (first:rest)
  | x == first = rest
  | otherwise = first : delete x  rest


main :: IO ()
main = do
  print(delete 2 [1,2,2,3,4,5])
  print(delete 6 [1,2,3,4,5])
  