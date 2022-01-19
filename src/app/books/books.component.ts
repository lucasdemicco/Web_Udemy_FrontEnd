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
  private _filtroLista: string = ''

  public get filtroLista(){
    return this._filtroLista
  }

  public set(value: string){
    this._filtroLista = value
    this.books = this.filtroLista ? this.filtrarBooks(this.filtroLista)
                                  : this.books
  }

  filtrarBooks(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase()
    return this.books.filter(
      (book: { title: string; }) => book.title.toLocaleLowerCase().indexOf(filtrarPor)
    )
  }

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
