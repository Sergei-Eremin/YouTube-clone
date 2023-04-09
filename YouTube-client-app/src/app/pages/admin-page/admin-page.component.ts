import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPageComponent implements OnInit {
  constructor() {}

  createCard = new FormGroup({
    title: new FormControl('', [Validators.minLength(5), Validators.required]),
    description: new FormControl('', [Validators.minLength(5), Validators.required]),
    img: new FormControl('', [Validators.minLength(5), Validators.required]),
  });

  ngOnInit(): void {}
}
