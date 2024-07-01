import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import {
  Languages,
  LatestPrices,
  OrderBook,
  Student,
} from '../interfaces/data';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getLanguages(): Observable<Languages[]> {
    return this.http.get<Languages[]>('http://localhost:3000/languages');
  }

  getStudent(): Observable<Student> {
    return this.http.get<Student>('http://localhost:3000/student');
  }

  getOrders(): Observable<OrderBook> {
    return this.http.get<OrderBook>('http://localhost:3000/orderbook');
  }

  getPrices(): Observable<LatestPrices> {
    return this.http.get<LatestPrices>('http://localhost:3000/latestprices');
  }
}
