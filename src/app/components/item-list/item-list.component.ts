import {Component, Input} from '@angular/core';
import {ToDoListService} from '../../service/to-do-list-service';
import {animate, state, style, transition, trigger} from '@angular/animations';

const millisseconds = '1000ms'

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
  animations: [
    trigger('removeAnimation', [
      state('present', style({opacity: 1, transform: 'translateX(0)'})),
      state('removed', style({opacity: 0, transform: 'translateX(-100)'})),
      transition('present => removed', animate(`${millisseconds} ease-out`))
    ])
  ]
})
export class ItemListComponent {
    @Input()
    tarefa?: {
      id?: number,
      title?: string,
      description?: string,
      isAccomplished?: boolean,
      state?: string
    }

    @Input()
    tarefaList?: Array<any>

    constructor(protected todoListService: ToDoListService) {

    }

    excluir(){
      if(this.tarefa?.id){
        this.todoListService.deleteItem(this.tarefa.id).subscribe({
          next: () => {
            const task = this.tarefaList?.find(item => item.id == this.tarefa?.id)
            task.state = 'removed'
            setTimeout(() => {
              this.tarefaList?.splice(this.tarefaList?.indexOf(task),1)
            }, parseInt(millisseconds.replace(/[^0-9]/g, '')))

          },
          error: (err ) => {
            alert(err.error.message)
          }
        })
      } else {
        throw new Error("A tarefa não existe")
      }
    }
}
