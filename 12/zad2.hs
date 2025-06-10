data Tree a = EmptyTree | Node a (Tree a) (Tree a)
emptyTree :: Tree Int 
emptyTree = EmptyTree 

singleNode :: Tree Int 
singleNode = Node 5 EmptyTree EmptyTree 

exampleTree :: Tree Int
exampleTree = Node 10 (Node 5 EmptyTree EmptyTree) (Node 15 (Node 12 EmptyTree EmptyTree) EmptyTree)

sumTree :: Num a => Tree a -> a 
sumTree EmptyTree = 0 
sumTree (Node value left right) = value + sumTree left + sumTree right

main :: IO ()
main = do
  print(sumTree exampleTree)