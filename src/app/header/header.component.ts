import { Component } from '@angular/core';
import { GenralService } from '../genral.service';
import { IHeader } from "./header.model"
@Component({
    
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styles: [``]

})

export class HeaderComponent { 

	constructor(private genralService:GenralService) {}
	public headerData:IHeader;


  	ngOnInit() {  		
  	
  		this.genralService.getHeaderData().subscribe(
			  headerData => { this.headerData = headerData}
		  );
  	}

}