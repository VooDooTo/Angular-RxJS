import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import { Point } from '../shared/models/point.model';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';

  public arrValues: Point[] = [
    { startPoint: -2, endPoint: 0 },
    { startPoint: -2.0, endPoint: 1 },
    { startPoint: -1, endPoint: 0 },
    { startPoint: -4, endPoint: 2 },
    { startPoint: 2, endPoint: 6 },
    { startPoint: 3, endPoint: 5 },
  ];

  public prevValuesArr: Point[] = [];
  public foundIntersections: Point[] = [];

  ngOnInit(): void {
    console.log("start component");
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
      this.prevValuesArr.map(it => {
        if (point.startPoint >= it.startPoint && point.endPoint < it.endPoint &&
          ((point.startPoint !== it.startPoint) && (point.endPoint !== it.endPoint))) {
          // if (point.endPoint <= it.endPoint) {
          //   console.log("smaller", point.endPoint, it.endPoint);
          // }
          const index = this.foundIntersections.findIndex(id => { return id.startPoint === it.startPoint && id.endPoint === it.endPoint });
          if (index === -1) {
            console.log("intersection found point", point.startPoint, point.endPoint);
            console.log("intersection found it", it.startPoint, it.endPoint);
            const index1 = Number((point.startPoint - point.endPoint).toFixed(2));
            const index2 = Number((it.startPoint - it.endPoint).toFixed(2));
            console.log("INDEX 1 ", index1);
            console.log("INDEX 2", index2);
            const val = Math.abs(index1 - index2);
            console.log("value", val);

            this.foundIntersections.push(point);
          }
        }
      })
      // if (point.startPoint >= )
      // console.log("sorted", intersection);
      // this.prevValuesArr.forEach((p: any) => {
      // });
      this.prevValuesArr.push(point);
    });
  }
}
