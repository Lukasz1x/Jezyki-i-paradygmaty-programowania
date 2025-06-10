member :: Eq a => a -> [a] -> Bool
member x [] = False
member x (first:rest) = x == first || member x rest


main :: IO ()
main = do
  print(member 2 [1,2,3,4,5])
  print(member 6 [1,2,3,4,5])
  