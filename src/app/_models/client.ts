import { Employee } from "./employee";

export class Client {
  constructor(
    public id?: number,
    public name?: string,
    public address?: string,
    public mobile?: number,
    public telOne?: number,
    public telTwo?: number,
    public whatsapp?: number,
    public email?: string,
    public nationality?: string,
    public residence?: string,
    public description?: string,
    public occupation?: any,
    public enterBy?: string,
    public enterDate?: string,
    public lastEdit?: string,
    public lastEditIn?: Date,
    public employees?: Employee[],
    public clientSource?: string,
    public customerRate?: number,
    ){}
}
