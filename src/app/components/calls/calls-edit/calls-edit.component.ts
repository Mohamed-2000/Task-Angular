import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Calls } from 'src/app/_models/calls';
import { CallsService } from 'src/app/_services/calls.service';

@Component({
  selector: 'app-calls-edit',
  templateUrl: './calls-edit.component.html',
  styleUrls: ['./calls-edit.component.css']
})
export class CallsEditComponent implements OnInit {
  TheCall:Calls=new Calls();
  constructor(public ar:ActivatedRoute, public Callser:CallsService,public router:Router) { }

  ngOnInit(): void {
    this.Callser.GetCall(this.ar.snapshot.params.id).subscribe(a=> this.TheCall=a)
  }

    save() {
      this.Callser.UpdateCall(this.TheCall).subscribe(a=> {console.log(a);
      this.router.navigateByUrl("/calls/list");

    });

  }
    cancel() {
      this.router.navigateByUrl("/calls/list");
  }

}
