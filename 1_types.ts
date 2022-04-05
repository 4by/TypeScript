const bool: boolean = true
const num1: number = 42
const num2: number = 3e10

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const contact: [string, number] = ['Vladilen', 1234567]

let variable: any = 42
variable = 'New String'

//возвращаемый тип данных never: возвращается ошибка или функция работает всегда
const throwError = (message: string): never => { throw new Error(message) }
function infinite(): never { while (true) { } }
//перезагрузка фукций (вызовется в зависимости от аргумента)
function reload(): void
function reload(a: number): void
function reload(a?: number): void { console.log(a ? 1 : 2) }

type ID = string | number | null | undefined
const id1: ID = 1234
const id2: ID = '1234'

enum Membership {
    one,
    two = 'example'
}
console.log(Membership.one, Membership.two, Membership[0], Membership[1]) //0, example, one, undefined
