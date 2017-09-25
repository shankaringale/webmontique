import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs/Observable';
import { CustomValidators } from 'ng2-validation'

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
  	s_social_reason: FormControl
  	s_address_1: FormControl
  	s_address_2:FormControl
  	s_postal_code:FormControl
  	s_cedex:FormControl
  	s_city:FormControl
  	nom:FormControl
  	fname:FormControl
  	qly_signature:FormControl
  	mobile_phone:FormControl
  	phone:FormControl
  	email:FormControl
  	bank_card_number:FormControl
  	contactless_number:FormControl
  	vad:FormControl
  	amex_direct_debit_number:FormControl
  	other:FormControl
  	commitmnt_initial:FormControl
  	commitmnt_inp:FormControl
  	num_subscriptions:FormControl
  	subscriptions_from:FormControl
  	subscriptions_to:FormControl
  	deb_name:FormControl
  	deb_street:FormControl
  	deb_postcode:FormControl
  	deb_codex:FormControl
  	deb_city:FormControl
  	deb_iban_1:FormControl
  	deb_iban_2:FormControl
  	deb_iban_3:FormControl
  	deb_iban_4:FormControl
  	deb_iban_5:FormControl
  	deb_iban_6:FormControl
  	deb_iban_7:FormControl
  	deb_bic_code:FormControl
  	deb_pays:FormControl
  	deb_location:FormControl

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
    	this.s_social_reason = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    	this.s_address_1 = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    	this.s_address_2 = new FormControl('', [])
    	this.s_postal_code = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    	this.s_cedex = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    	this.s_city = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
    	this.nom = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.fname = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.qly_signature = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.mobile_phone = new FormControl('', [Validators.required, this.NoWhitespaceValidator, CustomValidators.phone('fr-fr')])
		this.phone = new FormControl('', [Validators.required, this.NoWhitespaceValidator, CustomValidators.phone('fr-fr')])
		this.email = new FormControl('', [Validators.required, this.NoWhitespaceValidator, CustomValidators.email])
		this.bank_card_number = new FormControl('', [Validators.required, this.NoWhitespaceValidator, CustomValidators.number])
		this.contactless_number = new FormControl('', [Validators.required, this.NoWhitespaceValidator, CustomValidators.number])
		this.vad = new FormControl('', [Validators.required, this.NoWhitespaceValidator, CustomValidators.number])
		this.amex_direct_debit_number = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.other = new FormControl('', [])
		this.commitmnt_initial = new FormControl('', [])
		this.commitmnt_inp = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.num_subscriptions = new FormControl('', [Validators.required, this.NoWhitespaceValidator, CustomValidators.number])
		this.subscriptions_from = new FormControl('', [Validators.required, this.NoWhitespaceValidator, CustomValidators.date])
		this.subscriptions_to = new FormControl('', [Validators.required, this.NoWhitespaceValidator, CustomValidators.date])
		this.deb_name = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_street = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_postcode = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_codex = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_city = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_iban_1 = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_iban_2 = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_iban_3 = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_iban_4 = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_iban_5 = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_iban_6 = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_iban_7 = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_bic_code = new FormControl('', [Validators.required, this.NoWhitespaceValidator, CustomValidators.number])
		this.deb_pays = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		this.deb_location = new FormControl('', [Validators.required, this.NoWhitespaceValidator])
		
		


	    this.contractForm = new FormGroup({
	            social_reason: this.social_reason,
	            legal_form: this.legal_form,
	            nrcs:this.nrcs,
	            b_address_1:this.b_address_1,
	            b_address_2:this.b_address_2,
	            b_postal_code:this.b_postal_code,
	            b_cedex:this.b_cedex,
	            b_city:this.b_city,
	            s_social_reason:this.s_social_reason,
	            s_address_1:this.s_address_1,
	            s_address_2:this.s_address_2,
	            s_postal_code:this.s_postal_code,
	            s_cedex:this.s_cedex,
	            s_city:this.s_city,
	            nom:this.nom,
	            fname:this.fname,
	            qly_signature:this.qly_signature,
	            mobile_phone:this.mobile_phone,
	            phone:this.phone,
	            email:this.email,
	            bank_card_number:this.bank_card_number,
	            contactless_number:this.contactless_number,
	            vad:this.vad,
	            amex_direct_debit_number:this.amex_direct_debit_number,
	            other:this.other,
	            commitmnt_initial:this.commitmnt_initial,
	            commitmnt_inp:this.commitmnt_inp,
	            num_subscriptions:this.num_subscriptions,
	            subscriptions_from:this.subscriptions_from,
	            subscriptions_to:this.subscriptions_to,
	            deb_name:this.deb_name,
	            deb_street:this.deb_street,
	            deb_postcode:this.deb_postcode,
	            deb_codex:this.deb_codex,
	            deb_city:this.deb_city,
	            deb_iban_1:this.deb_iban_1,
	            deb_iban_2:this.deb_iban_2,
	            deb_iban_3:this.deb_iban_3,
	            deb_iban_4:this.deb_iban_4,
	            deb_iban_5:this.deb_iban_5,
	            deb_iban_6:this.deb_iban_6,
	            deb_iban_7:this.deb_iban_7,
	            deb_bic_code:this.deb_bic_code,
	            deb_pays:this.deb_pays,
	            deb_location:this.deb_location
	    })

	    this.loadScript('assets/js/formDatepicker.js');  
  	}	

	back(){
       this.router.navigate(["/contrats-premium-adsl-portables"])
    }

    public loadScript(url) {
	    console.log('preparing to load...')
	    let node = document.createElement('script');
	    node.src = url;
	    node.type = 'text/javascript';
	    document.body.appendChild(node);
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