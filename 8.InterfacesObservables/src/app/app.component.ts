import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessagesService } from './services/messages.service';
import { Post } from './interfaces/post';
import { NgFor } from '@angular/common';
import { Languages, LatestPrices, OrderBook, Student } from './interfaces/data';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  providers: [MessagesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  posts: Post[] = [];
  constructor(private messagesService: MessagesService) {}

  ngOnInit() {
    this.messagesService.getPosts().subscribe({
      next: (response: Post[]) => {
        this.posts = response;
      },
      error: (error: Error) => {
        console.error(error);
      },
    });

    this.messagesService.getLanguages().subscribe({
      next: (response: Languages[]) => {
        console.log(response);
      },
      error: (error: Error) => {
        console.error(error);
      },
    });

    this.messagesService.getStudent().subscribe({
      next: (response: Student) => {
        console.log(response);
      },
      error: (error: Error) => {
        console.error(error);
      },
    });

    this.messagesService.getOrders().subscribe({
      next: (response: OrderBook) => {
        console.log(response);
      },
      error: (error: Error) => {
        console.error(error);
      },
    });

    this.messagesService.getPrices().subscribe({
      next: (response: LatestPrices) => {
        console.log(response);
      },
      error: (error: Error) => {
        console.error(error);
      },
    });
  }
}
