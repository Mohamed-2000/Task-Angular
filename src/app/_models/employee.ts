import { Client } from "./client";

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public clients: Client[]
  ){}
}
