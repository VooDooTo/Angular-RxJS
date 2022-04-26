import { Component, OnInit } from '@angular/core';
import { Point } from '../shared/models/point.model';

const _ = require('lodash');

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';

  public arrValues: Point[] = [
    { startPoint: -2.3, endPoint: 0 },
    { startPoint: -2.0, endPoint: 1 },
    { startPoint: -1, endPoint: 0 },
    { startPoint: -4, endPoint: 2 },
    { startPoint: 2, endPoint: 6 },
    { startPoint: 3, endPoint: 5 },
  ];

  public prevValuesArr: Point[] = [];

  ngOnInit(): void {
    console.log("test");
    this.calculateValues();
  }

  compareFn(a: Point, b: Point) {
    if (b.startPoint > a.startPoint) {
      return -1;
    }
    if (a.startPoint > b.startPoint) {
      return 1;
    }
    return 0;
  }

  calculateValues() {
    this.arrValues.sort(this.compareFn);

    this.arrValues.forEach(point => {

      this.prevValuesArr.forEach(p => {
        if (point.startPoint >= p.startPoint || point.startPoint <= p.endPoint) {
          console.log("inside point", point);
          console.log("tested against", p);
        }
        return p;
      });
      this.prevValuesArr.push(point);
    });

    _.intersection([0, 345, 324], [1, 0, 324])
    console.log("sorted", this.arrValues);
  }
}
