
class CPoint {
  pointX: number
  pointY: number
  constructor (x: number, y: number) {
    this.pointX = x
    this.pointY = y
  }
  toConsole () {
    console.log(`(${this.pointX}, ${this.pointY})`)
  }
}
class ColorPoint extends CPoint{
  PColor: string
  constructor(x: number, y: number, color: string) {
    super(x, y) // 调用了父类的构造函数，且super在子类中是必须的调用的
    this.PColor = color
  }
  toPrint () {
    console.log(`${this.PColor}...`)
    super.toConsole() // 调用父类的toConsole（）方法
  }
}
const Cp1 = new CPoint(2, 3)
Cp1.toConsole() // (2, 3)
const ColorP1 = new ColorPoint(3, 4, 'red')
/**
 * red...
 * (3, 4)
 */
ColorP1.toPrint()

class CA {
  ca: string 
  constructor (a: string) {
    this.ca = a
    console.log(this.ca)
  }
}
class CB extends CA {
  ca: string
  constructor (a: string) {
    super(a) // jiang
    this.ca = a
  }
}
let cb1 = new CB('jiang')
let ca1 = new CA('tan')
