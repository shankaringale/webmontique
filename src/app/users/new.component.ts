import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'

@Component({
  templateUrl: 'new.component.html'
})
export class NewComponent implements OnInit {
  public message: string;

  constructor(private router:Router) {}

  ngOnInit() {
    this.message = 'Hello';
  }

  	back(){
       this.router.navigate(["/"])
    }

}