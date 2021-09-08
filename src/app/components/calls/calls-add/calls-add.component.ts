import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calls } from 'src/app/_models/calls';
import { CallsService } from 'src/app/_services/calls.service';

@Component({
  selector: 'app-calls-add',
  templateUrl: './calls-add.component.html',
  styleUrls: ['./calls-add.component.css']
})
export class CallsAddComponent implements OnInit {
  TheCall:Calls=new Calls();
  constructor(public Callser:CallsService,public router:Router) { }

  ngOnInit(): void {
  }

  save() {
    this.Callser.AddCall(this.TheCall).subscribe(a=> {console.log(a);
    this.router.navigateByUrl("/calls/list");
  })
}
  cancel() {
    this.router.navigateByUrl("/calls/list");

}

}
