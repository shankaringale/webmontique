import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router'


@Component({
  templateUrl: 'premium.component.html'
})
export class PremiumComponent implements OnInit {
  public message: string;

  	constructor(private router:Router) {}

  		ngOnInit() {
    //this.message = 'Hello';
  	}	

	back(){
       this.router.navigate(["/première-demande"])
    }

}