

interface inter1 { type: number; }
interface inter2 { type: 23; }
const pref1 = () => ({ type: 23 })

//может возвращать любой намбер
const func = (): inter1 => ({ type: 111 })
//может возвращать только 23
const func2 = (): inter2 => ({ type: 23 })
//может возвращать любой намбер
const func3 = (): ReturnType<typeof pref1> => ({ type: 111 })

