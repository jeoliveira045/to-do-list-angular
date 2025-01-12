import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ToDoListService{

  private url: string = 'http://localhost:8080'

  constructor(protected httpClient: HttpClient) {

  }

  public findAll(){
    return this.httpClient.get(`${this.url}/to-do-list`)
  }

  public addItem(resource: any){
    return this.httpClient.post(`${this.url}/to-do-list`, resource)
  }

  public deleteItem(id: number){
    return this.httpClient.delete(`${this.url}/to-do-list/${id}`)
  }
}
