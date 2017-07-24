import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Http, Headers, Response } from "@angular/http";
import { ErrorService } from "../errors/error.service";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import {HomeawayService} from '../homeaway/homeaway.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

searchForm: FormGroup;

  constructor(private http: Http,
              private errorService: ErrorService,
              private homeAwayService: HomeawayService
              ) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
        location: new FormControl,
        dates: new FormControl,
        guests: new FormControl
    });
  }

  onSearch() {
    const trip = {
      location: this.searchForm.value.location,
      dates: this.searchForm.value.dates,
      guests: this.searchForm.value.guests
    }

    console.log('trip', trip);
        this.homeAwayService.searchParams(trip)
            // .subscribe(
            //   data => console.log(data),
            //   error => console.error(error)
            // );
        this.searchForm.reset();
    }






}
