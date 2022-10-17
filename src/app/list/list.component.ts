import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  columns = [];

  list = [];

  constructor() {}

  ngOnInit() {
    let list = localStorage.getItem('users');
    if (list) {
      this.list = JSON.parse(list);
      this.columns = Object.keys(this.list[0]);
    }
  }
}
