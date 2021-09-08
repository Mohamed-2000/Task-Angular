import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client} from 'src/app/_models/client';
import { ClientService } from 'src/app/_services/client.service';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  title = 'refreshPage';
  clients:Client[]=[];
  totalRecord: number | undefined;
  Page:number = 1;
  searchValue!: string;

  titleExport = 'angular-app';
  fileName= 'EGMasters.xlsx';
  constructor(public Clientser:ClientService,public router:Router, public _location: Location) { }

  ngOnInit(): void {
    this.Clientser.getAllClients().subscribe(
        a=> {this.clients=a;console.log(a);
        this.totalRecord = a.results.length;
      }
    )
  }

  Delete(id:any){
    if(confirm("are you sure")) {
      this.Clientser.DeleteClient(id).subscribe(res => {
        this.Clientser.getAllClients();
      })
      this.router.navigateByUrl("/client/list");

    }
  }


  //refresh client list without refresh the page
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


