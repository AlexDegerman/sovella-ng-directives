import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  clicked = true;
  loki = [] as any;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.loki.push(new Date());
    // this.loki.push(this.loki.length + 1);
  }

}
