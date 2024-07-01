import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgIf,
  NgFor,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Structure Directives';

  isLoggedIn: boolean = true;
  check: boolean = true;
  username: string = 'Umair';

  names: string[] = ['umair', 'david', 'john'];

  grade: string = 'D';
}
