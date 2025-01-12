import { Component } from '@angular/core';
import {ItemListComponent} from "../../components/item-list/item-list.component";
import {NgForOf} from "@angular/common";
import {ToDoListService} from '../../service/to-do-list-service';

@Component({
  selector: 'app-item-list-page',
  standalone: true,
    imports: [
        ItemListComponent,
        NgForOf
    ],
  templateUrl: './item-list-page.component.html',
  styleUrl: './item-list-page.component.css'
})
export class ItemListPageComponent {
  tarefaList: any

  constructor(protected toDolistService: ToDoListService) {
    this.toDolistService.findAll().subscribe(res => {
        this.tarefaList = res
    })
  }
}
