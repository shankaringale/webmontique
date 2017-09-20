import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import { CreditCardValidator } from 'ng2-cc-library';

@Component({
  templateUrl: 'existing.component.html',
    styles: [`
     em { float:right; color:#E05C65; padding-left:10px; }
    .error input, .error input select, .error input textarea { background-color: #E3C3C5; }
  `]
})
export class ExistingUserComponent implements OnInit {
  public message: string;

  existingCustomerForm: FormGroup
  clientId: FormControl
  clientCardNum: FormControl


  constructor() {}

  ngOnInit() {
  	this.clientId = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    this.clientCardNum = new FormControl('', [Validators.required, CreditCardValidator.validateCCNumber])

    this.existingCustomerForm = new FormGroup({
            clientId: this.clientId,
            clientCardNum: this.clientCardNum
    })

    console.log(this.clientId)

  }

	public NoWhitespaceValidator(control: FormControl) {
    	let isWhitespace = (control.value || '').trim().length === 0;
    	let isValid = !isWhitespace;
    	return isValid ? null : { 'whitespace': true }
	}


	loadSession(formValues){
        
        
        console.log(formValues)
    }

}