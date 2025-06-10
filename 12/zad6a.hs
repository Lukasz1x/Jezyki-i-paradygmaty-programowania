append :: [a] -> [a] -> [a]
append a b = a ++ b


main :: IO ()
main = do
  print(append [1,2,3,4,5,6,7,8,2,6,7] [8,9,10])