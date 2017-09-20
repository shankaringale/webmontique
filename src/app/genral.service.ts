import { Injectable } from '@angular/core';
import { AppSettings } from './appSettings'
import { Http, Headers, Response} from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx'
import { IHeader } from "./header/header.model"
import 'rxjs/add/operator/map';

@Injectable()

export class GenralService {

	constructor(private http: Http) {
        
    }

    getHeaderData():Observable<IHeader>{
				
		return this.http.get(AppSettings.API_ENDPOINT+"genral.php")
		.map((res:Response) => res.json());

	}	
} 