last :: [a] -> a
last [] = error "pusta lista"
last [x] = x
last (_:x) = Main.last x


main :: IO ()
main = do
  print(Main.last [1,2,3,4,5,6,7,8,2,6,7])
  print(Main.last [1])