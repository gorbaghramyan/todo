import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class Rocket implements OnInit {

  constructor() { }
  title = 'rocket';
  ngOnInit(): void {
  }

}
