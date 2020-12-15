import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css', './home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject('GOOGLE_URL') private apiURL: string) {

    console.log(apiURL);
  }

  ngOnInit(): void {
  }

}
