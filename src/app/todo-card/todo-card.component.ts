import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  constructor() { }

  title = 'title';
  description = 'description';
  comment = 'comment';


  ngOnInit(): void {
  }

}
