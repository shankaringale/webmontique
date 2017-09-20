import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router'


@Component({
  templateUrl: 'annuel-adsl-fixed.component.html'
})
export class AnnuelAdslFixedComponent implements OnInit {
  public message: string;

  	constructor(private router:Router) {}

  		ngOnInit() {
    //this.message = 'Hello';
  	}	

	back(){
       this.router.navigate(["/contrats-de-location-annuelle-adsl"])
    }

}