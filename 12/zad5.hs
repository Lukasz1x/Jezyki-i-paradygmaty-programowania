func :: [String] -> [(String,String)]
func [x] = []
func (first:rest) = [(first, x) | x<-rest] ++ func rest


main :: IO ()
main = do
  print(func colors)
  
  
colors = ["black", "white", "blue", "yellow", "red"]  