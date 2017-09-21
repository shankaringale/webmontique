import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import { CreditCardValidator } from 'ng2-cc-library';

import { Router } from '@angular/router'


@Component({
  templateUrl: 'full-services-tpe-portable-adsl.component.html',
  styles: [`
     em { float:right; color:#E05C65; padding-left:10px; }
    .error input, .error input select, .error input textarea { background-color: #E3C3C5; }
    .error-input { background-color: #E3C3C5 !important;
    ; }
  `]
})
export class PrmiumTpePortableAdslComponent implements OnInit {
  	public message: string;

  	contractForm: FormGroup
  	social_reason: FormControl
  	legal_form: FormControl
  	nrcs:FormControl
  	b_address_1:FormControl
  	b_address_2:FormControl
  	b_postal_code:FormControl
  	b_cedex:FormControl
  	b_city:FormControl

  	constructor(private router:Router) {}

  	ngOnInit() {
  		this.social_reason = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    	this.legal_form = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    	this.nrcs = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    	this.b_address_1 = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    	this.b_address_2 = new FormControl('', [])
    	this.b_postal_code = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    	this.b_cedex = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    	this.b_city = new FormControl('', [Validators.required, this.NoWhitespaceValidator])

	    this.contractForm = new FormGroup({
	            social_reason: this.social_reason,
	            legal_form: this.legal_form,
	            nrcs:this.nrcs,
	            b_address_1:this.b_address_1,
	            b_address_2:this.b_address_2,
	            b_postal_code:this.b_postal_code,
	            b_cedex:this.b_cedex,
	            b_city:this.b_city
	    })
  	}	

	back(){
       this.router.navigate(["/contrats-premium-adsl-portables"])
    }

    public NoWhitespaceValidator(control: FormControl) {
    	let isWhitespace = (control.value || '').trim().length === 0;
    	let isValid = !isWhitespace;
    	return isValid ? null : { 'whitespace': true }
	}

	saveForm(formValues){
                
        console.log(formValues)
    }

}