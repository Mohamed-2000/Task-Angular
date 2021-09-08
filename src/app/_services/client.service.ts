import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../_models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl:string = "https://localhost:44349/api/client";

  getAllClients():Observable<any> {

    return this.http.get<Client[]>(this.baseUrl+"/GetWithEmployee");
  }

  AddClient(customer:Client) {
    return this.http.post<Client>(this.baseUrl, customer);
  }

  GetClient(id:number){
    return this.http.get<Client>(this.baseUrl+"/"+id);
  }

  UpdateClient(customer:Client) {
    return this.http.put<Client>(this.baseUrl+"/"+customer.id, customer);
  }

  DeleteClient(id:number) {
    return this.http.delete<Client>(this.baseUrl+"/"+id);

  }
  constructor(public http:HttpClient) { }
}
