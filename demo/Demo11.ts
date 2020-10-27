class Person<T> {
  constructor(private grade: T[]) {}
  getGrade (index: number) {
    console.log(this.grade[index])
  }
}
const P1 = new Person<number>([99, 98, 67, 88])
P1.getGrade(1)