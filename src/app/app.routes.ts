import { Routes } from '@angular/router';
import {AddItemListFormComponent} from './components/add-item-list-form/add-item-list-form.component';
import {ItemListComponent} from './components/item-list/item-list.component';
import {ItemListPageComponent} from './pages/item-list-page/item-list-page.component';

export const routes: Routes = [
  {
    path: 'add-item',
    component: AddItemListFormComponent
  },
  {
    path: 'item-list',
    component: ItemListPageComponent
  }
];
