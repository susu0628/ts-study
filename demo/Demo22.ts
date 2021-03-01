
abstract class APerson {
  constructor (name: string) {}
  abstract say(): void
}
class ATeacher extends APerson {
  TName: string
  constructor(name: string) {
    super(name)
    this.TName = name
  }
  say () {
    console.log(this.TName)
  }
}
let AT1 = new ATeacher('jiang')
AT1.say()

class ProductService {
  getTotal(): void
  getTotal(a: number, b: number): void
  getTotal(a?: number, b?: number): void {
    if (a && b) {
      console.log(a + b)
    } else {
      console.log('empty')
    }
  }
}
let CPS1 = new ProductService ()
CPS1.getTotal() // 'empty'
CPS1.getTotal(2, 3) // 5
