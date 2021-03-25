import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {

  book: Book;

  constructor(private router: Router, private bookService: BookService) {
    this.book = new Book();
  }

  onSubmit() {
    this.bookService.save(this.book).subscribe(data => {
      console.log(data)
      this.gotoList();
    },
    error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/books']);
  }
}
