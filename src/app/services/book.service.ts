import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/books';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Book[]>
  {
    return this.http.get<Book[]>(this.baseUrl);
  }

  public save(book: Book)
  {
    return this.http.post<Book>(this.baseUrl, book);
  }
}
