// абстрактные классы это среднее между классом и интерфейсом
abstract class Animal {
  // при инициализации экземпляра:
  // 1) будет создано поле voice
  //    1.1) protected - значит доступно только для расширяемых классов
  // 2) будет вызван метод 
  constructor(protected voice: string = '') { this.get() }
  get() { console.log(this.voice) }
  abstract set(voice: string): void
}

class Cat extends Animal {
  set(voice: string): void { this.voice = voice }
}

const cat = new Cat('myau')
cat.set('gav')
cat.get()
console.log(cat instanceof Animal)
