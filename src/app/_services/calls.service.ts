import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calls } from '../_models/calls';

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  private baseUrl:string = "https://localhost:44349/api/calls";

  getAllCalls():Observable<any> {

    return this.http.get<Calls>(this.baseUrl+"/GetWithpagging");
  }

  AddCall(customer:Calls) {
    return this.http.post<Calls>(this.baseUrl, customer);
  }

  GetCall(id:number){
    return this.http.get<Calls>(this.baseUrl+"/"+id);
  }

  UpdateCall(customer:Calls) {
    return this.http.put<Calls>(this.baseUrl+"/"+customer.id, customer);
  }

  DeleteCall(id:number) {
    return this.http.delete<Calls>(this.baseUrl+"/"+id);

  }
  constructor(public http:HttpClient) { }
}
