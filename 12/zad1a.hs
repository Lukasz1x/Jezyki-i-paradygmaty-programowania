main :: IO ()
main = do
  let x = takeWhile (<50) (map kw [0..])
  print(x)

kw :: Integer -> Integer
kw x = x*x