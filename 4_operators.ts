interface From1 {
  p1: string
  p2: number
}

type From2 = {
  p1: string
  p2: number
  p3: string
}

type pickedKeys1 = keyof From1 // 'p1' | 'p2'
type pickedKeys2 = Pick<From1, 'p1' | 'p2'> // 'p1' | 'p2'
type pickedKeys3 = Exclude<keyof From2, 'p2' | 'anyValue1'> // 'p1' | 'p3' | 'p4'

let key3: pickedKeys3 = 'p3'

console.log(key3)
