import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/_models/client';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  TheClient:Client= new Client();
  constructor(public ar:ActivatedRoute,public Clientser:ClientService,public router:Router) { }

  ngOnInit(): void {
    this.Clientser.GetClient(this.ar.snapshot.params.id).subscribe(a=> this.TheClient=a)
  }

    save() {
      this.Clientser.UpdateClient(this.TheClient).subscribe(a=> {console.log(a);
      this.router.navigateByUrl("/client/list");

    });

  }
    cancel() {
      this.router.navigateByUrl("/client/list");
  }
}
