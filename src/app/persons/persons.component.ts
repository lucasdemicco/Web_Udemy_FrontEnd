import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {

  public persons: any

  public urlApi: string = 'http://localhost/5000/api/person/v1'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public getPersons() : any{
    this.http.get(this.urlApi).subscribe(
      response => this.persons = response,
      error => console.log(error)
    )
  }

}
