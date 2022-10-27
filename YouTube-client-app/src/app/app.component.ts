import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'YouTube-client-app';

  myClass: object = { foo: true, bar: false };

  ngOnInit(): void {}
}
