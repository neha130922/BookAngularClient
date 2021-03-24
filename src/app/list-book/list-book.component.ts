import { Observable } from "rxjs";
import { BookService } from "./../services/book.service";
import { Book } from "./../models/book";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {}

    ngOnInit()
    {
      this.bookService.findAll().subscribe(data => this.books = data);
    }

    onLoad()
    {
      this.ngOnInit();
    }
}
