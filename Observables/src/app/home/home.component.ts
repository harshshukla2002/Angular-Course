import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  firstObservable: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObservable = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        if (count === 4) observer.complete();
        if (count > 3) observer.error(new Error('Count is greater than 3'));
      }, 1000);
    });

    const modifiedObs = customObservable.pipe(
      map((data: number) => {
        return `round ${data + 1}`;
      })
    );

    this.firstObservable = modifiedObs.subscribe(
      (count: number) => {
        console.log(count);
      },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('Counting is completed');
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObservable.unsubscribe();
  }
}
