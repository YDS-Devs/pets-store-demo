import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedItem = 0;

  constructor() { }

  ngOnInit(): void {
  }

   active (selected: any) {
    this.selectedItem = selected
  }
}
