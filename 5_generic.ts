interface custObj { }
//уточняем, что аргумент должен быть типа "объект", который сам задается аргументом
//тогда ts допускает, что в аргументе мб любое свойство
//в общем случае наследуемся не от object а от созданного custObj, 
//чтобы могли уточнить какой нужен объект (например со св-м length)
const mergeObjects = <T extends custObj, R extends custObj>(a: T, b: R) => {
    return { ...a, ...b }
}
const nameFromMerge = mergeObjects({ name: 'Vladilen' }, { age: 26 }).name

// каждый раз, когда не задается тип, то берется тип any
// с ним нельзя задавать методы конкретных типов (например строк)
// new Promise<number>(res => { setTimeout(() => { res(42) }, 20) })
// .then(data => { console.log(data.toFixed()) })
