import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { ErrorService } from "../errors/error.service";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class HomeawayService {

  constructor(private http: Http, private errorService: ErrorService) { }



  searchParams(trip) {
    const body = JSON.stringify(trip)
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/', trip, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      })
  };


}
