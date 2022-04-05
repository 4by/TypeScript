//интерфейс:класс без значений
interface rectInter {
  readonly id: string
  size: { width: number }
  color?: string //необязательный
}

//интерфейс расширяет интерфейс (добавляет новые сущности)
interface rectInterWithFun extends rectInter {
  multiply: (arg: number) => number
}

//класс имплементирует интерфейс (конкретизирует его поля)
class rectClass implements rectInterWithFun {
  id: string = '123';
  size: { width: number } = { width: 20 };
  multiply(arg: number): number { return this.size.width * arg }
}

//создание переменной интерфейса (не являются instanceof rectInter, так как rectInter это не класс)
const rect2 = {} as rectInter

const rect3 = <rectInter>{}
rect3.size = { width: 15 }

const rect: rectInterWithFun = {
  id: '123',
  size: { width: 20 },
  multiply(arg) { return this.size.width * arg }
}

//фильтр для ключа и значения
interface Filtered {
  [key: string | number]: string | number
}

const filtred: Filtered = { border: 4 }


