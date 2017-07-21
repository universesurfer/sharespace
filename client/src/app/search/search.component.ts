import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

searchForm: FormGroup;

  constructor() { }

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
  }

}
