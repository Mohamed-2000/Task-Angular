import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CallsService } from 'src/app/_services/calls.service';
import { Location } from '@angular/common';
import * as XLSX from 'xlsx';
import { Calls } from 'src/app/_models/calls';
@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  title = 'refreshPage';
  calls:Calls[]=[];

  totalRecord: number | undefined;
  Page:number = 1;
  _searchCall!: string;

  titleExport = 'angular-app';
  fileName= 'EGMasters.xlsx';
  constructor(public Callser:CallsService,public router:Router, public _location: Location) { }

  ngOnInit(): void {
    this.Callser.getAllCalls().subscribe(
        a=> {this.calls=a;console.log(a);
        this.totalRecord = a.results.length;
      }
    )
  }

  Delete(id:any){
    if(confirm("are you sure")) {
      this.Callser.DeleteCall(id).subscribe(res => {
        this.Callser.getAllCalls();
      })
      this.router.navigateByUrl("/calls/list");

    }
  }


  //refresh Calls list without refresh the page
  refresh(): void {
    this.router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this.router.navigate([decodeURI(this._location.path())]);
    });
  }

  //Show the hidden search input
  show() {

     var element = document.getElementById("search");
     if(element != null){
       console.log(element);

      element.style.display = "flex";
     }
  }

  //Export Table Data To Excel file
  export() {
    let element = document.getElementById('tablerecords');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }


}
