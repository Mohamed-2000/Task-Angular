import { Pipe, PipeTransform } from '@angular/core';
import { Calls } from './_models/calls';

@Pipe({
  name: 'callsSearch'
})
export class CallsSearchPipe implements PipeTransform {

  transform(TheCall: Calls[], _searchCall:string ): Calls[] {
    if (!TheCall || ! _searchCall ) {
      return TheCall;
    }
    return TheCall.filter(Calls => Calls.callTitle?.toLocaleLowerCase().includes(_searchCall.toLocaleLowerCase()));
  }

}
