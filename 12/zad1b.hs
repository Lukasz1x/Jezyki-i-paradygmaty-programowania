main :: IO ()
main = do
  let y = kw (snd ([1..],5))
  print(y)

kw :: Integer -> Integer
kw x = x*x