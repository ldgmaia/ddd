import { randomUUID } from 'node:crypto'

class Instructor {
  public id: string
  public title: string

  constructor(title: string, id?: string) {
    this.id = id ?? randomUUID()
    this.title = title
  }
}
