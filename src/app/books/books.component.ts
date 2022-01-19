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
  private _filtroLista: any = ''
  public _booksFiltrados: any = []

  public get filtroLista(){
    return this._filtroLista
  }

  public set(value: string){
    this._filtroLista = value
    this._booksFiltrados = this.filtroLista ? this.filtrarBooks(this.filtroLista)
                                  : this.books
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

  filtrarBooks(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase()
    return this.books.filter(
      (book: { title: string; author: string }) => book.title.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      || book.author.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }
}
