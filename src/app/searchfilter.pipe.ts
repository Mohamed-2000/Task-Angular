import { Pipe, PipeTransform } from '@angular/core';
import { Client } from './_models/client';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(clients:Client[], searchValue:string): Client[] {

    if (!clients || ! searchValue){
      return clients;
    }
    return clients.filter(client =>
      client.name?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
