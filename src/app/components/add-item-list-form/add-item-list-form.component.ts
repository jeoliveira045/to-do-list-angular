import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToDoListService} from '../../service/to-do-list-service';

@Component({
  selector: 'app-add-item-list-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ToDoListService],
  templateUrl: './add-item-list-form.component.html',
  styleUrl: './add-item-list-form.component.css'
})
export class AddItemListFormComponent {
  tarefaForm: FormGroup;

  constructor(private formGroup: FormBuilder, public toDoListService: ToDoListService) {
    this.tarefaForm = this.formGroup.group({
      id: [4],
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.email]],
      isAccomplished: [false, [Validators.required, Validators.minLength(6)]]
    })
  }

    onSubmit(){
        console.log(this.tarefaForm)
        this.toDoListService.addItem(this.tarefaForm.value).subscribe(res => res)
    }
}
