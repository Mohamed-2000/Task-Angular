import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/_models/client';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  TheClient:Client= new Client();

  constructor(public Clientser:ClientService,public router:Router) { }

  save() {
    this.Clientser.AddClient(this.TheClient).subscribe(a=> {console.log(a);
    this.router.navigateByUrl("/client/list");
  })
}
  cancel() {
    this.router.navigateByUrl("/client/list");

}
  ngOnInit(): void {
  }

}
