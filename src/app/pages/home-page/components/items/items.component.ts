import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],

})
export class ItemsComponent implements OnInit {
  numArr = [
    { num: 0, displayNum: "00"},
    { num: 0, displayNum: "00"},
    { num: 0, displayNum: "00"},
    { num: 0, displayNum: "00"},
]
  constructor() { }

  ngOnInit(): void {
  }

   pad(num: any) {
    num = num.toString();
    if (num < 10) num = "0" + num;
    return num;
  }

  increment(index: any) {
    this.numArr[index].num += 1;
    this.numArr[index].displayNum = this.pad(this.numArr[index].num);
  }

  decrement(index: any) {
    if (this.numArr[index].num === 0) return;
    this.numArr[index].num -= 1;
    this.numArr[index].displayNum = this.pad(this.numArr[index].num);
  }
}
