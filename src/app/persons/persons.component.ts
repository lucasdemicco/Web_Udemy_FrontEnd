import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  public urlApi: string = 'http://localhost/5000/api/person/v1'
  public persons: any = []
  private _filtroLista: string = ''
  public _personsFiltrados: any = [] 

  public get filtroLista(){
    return this._filtroLista
  }

  public set(value: string){
    this._filtroLista = value
    this._personsFiltrados = this._filtroLista ? this.filtrarPersons(this.filtroLista)
                                    : this.persons
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPersons()
  }

  public getPersons() : any{
    this.http.get(this.urlApi).subscribe(
      response => this.persons = response,
      error => console.log(error)
    )
  }

  filtrarPersons(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase()
    return this.persons.filter(
      (person: { firstName: string; lastName: string }) => person.firstName.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      || person.lastName.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }
}
