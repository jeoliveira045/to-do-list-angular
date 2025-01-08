import {Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ItemListComponent} from './components/item-list/item-list.component';
import {ToDoListService} from './service/to-do-list-service';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemListComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'untitled';

  // @ViewChild('itemListComponent')
  // itemListComponent?: ItemListComponent

  constructor(protected toDolistService: ToDoListService) {

  }

  ngOnInit() {
    // if(this.itemListComponent){
    //   this.itemListComponent.isAccomplished = true
    // }

  }

}
