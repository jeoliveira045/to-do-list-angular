import {Inject, Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ToDoListService{

  toDoList: {title: string, description: string, isAccomplished: boolean}[] = [
    {
      title: 'Levar o cachorro para passear',
      description: 'Dar 5 voltas com o cachorro na praça',
      isAccomplished: false
    },
    {
      title: 'Estudar 20 minutos por dia',
      description: 'Estudar programação por 20 minutos por dia para aproveitar',
      isAccomplished: false
    },
    {
      title: 'Ler 5 páginas de livros por dia',
      description: 'Procure um livro interessante e leia 5 páginas por dia',
      isAccomplished: false
    },
  ]
}
