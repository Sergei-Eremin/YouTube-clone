import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'YouTube-client-app';

  ngOnInit(): void {
    // const source = new Observable(function (subscriber) {
    //   console.log('Observable create!');
    //   let count = 0;
    //   const timer = setInterval(() => {
    //     subscriber.next(count);
    //     subscriber.next(Math.random());
    //     count += 1;
    //   }, 1000);
    //   setInterval(() => {
    //     subscriber.error('Ошибка в Observable');
    //   }, 2000);
    //   return () => {
    //     console.log('Observable end!');
    //     clearInterval(timer);
    //   };
    // });
    // const subscription = source.subscribe(
    //   function (value) {
    //     console.log('next', value);
    //   },
    //   function (err) {
    //     console.error('Ошибка в подписчике =>', err);
    //     console.log(subscription, 'Подписка анулирована в ошибке');
    //   },
    //   function () {
    //     console.log('complete');
    //   },
    // );
    // setTimeout(() => {
    //   subscription.unsubscribe();
    //   console.log(subscription, 'Подписка на subscription закончена через .unsubscribe()');
    // }, 4500);
  }
}
