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

  public get filtroLista(){
    return this._filtroLista
  }

  public set(value: string){
    this._filtroLista = value
    this.persons = this.filtroLista ? this.filtrarPersons(this.filtroLista)
                                    : this.persons
  }

  filtrarPersons(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase()
    return this.persons.filter(
      (person: { name: string; }) => person.name.toLocaleLowerCase().indexOf(filtrarPor)
    )
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

}
