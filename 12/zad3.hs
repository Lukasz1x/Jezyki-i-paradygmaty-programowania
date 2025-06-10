rev:: [a] -> [a]
rev x = rev' x []

rev' :: [a] -> [a] -> [a]
rev' [] y = y
rev' (first:rest) y = rev' rest (first:y)

main::IO()
main = do
  print(rev [1, 2, 3, 4, 5])