import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DatePipe,
  LowerCasePipe,
  UpperCasePipe,
  CurrencyPipe,
  PercentPipe,
} from '@angular/common';
import { AppendPipe } from './pipes/append.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    PercentPipe,
    AppendPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '4.Pipes';
  today: number = Date.now();
  currency: number = 1.123423423;
}
