import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  user = this.userService.getUser();
  constructor(private userService: UserService) {}

  userData = {
    id: 1,
    name: 'Umair Jameel',
    roles: ['Admin', 'User'],
    status: {
      active: true,
      lastLogin: new Date(2024, 3, 14),
    },
  };
}
