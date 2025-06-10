import Prelude hiding (filter)

predykat :: Int -> Bool
predykat a
  | a < 5     = True
  | otherwise = False

filter:: (a -> Bool) -> [a] -> [a]
filter p [] = []
filter p (first:rest)
  | p first = first : filter p rest
  | otherwise = filter p rest

main :: IO ()
main = do
  print(filter predykat [1,2,3,4,5,6,7,8,2,6,7])
  print(filter (>2) [1,2,3,4,5,6,7,8,2,6,7])