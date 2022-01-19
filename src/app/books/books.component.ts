import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public urlApi: string = "http://localhost/5000/api/books/v1"
  public books: any = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBooks()
  }

  public getBooks(){
    this.http.get(this.urlApi).subscribe(
      response => this.books = response,
      error => console.log(error)
    )
  }
}
