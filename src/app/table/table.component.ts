import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  list = [];
  @Input() row;
  @Output() newEmit = new EventEmitter();
  columns = [];
  constructor() {}

  ngOnInit() {
    let list = localStorage.getItem('users');
    if (list) {
      this.list = JSON.parse(list);
      this.columns = Object.keys(this.list[0]);
    }
  }

  ngOnChanges() {
    if (this.row) {
      if (typeof this.row.index == 'number') {
        this.list[this.row.index] = this.row;
      } else {
        this.list.push(this.row);
      }
      console.log(this.list);
      this.columns = Object.keys(this.list[0]);

      localStorage.setItem('users', JSON.stringify(this.list));
    }
  }
  deleteRow(i) {
    this.list.splice(i, 1);
  }

  editRow(i) {
    let row = this.list[i];
    row.index = i;
    this.newEmit.emit(row);
  }
}
