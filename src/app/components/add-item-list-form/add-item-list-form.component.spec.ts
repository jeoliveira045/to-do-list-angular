import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemListFormComponent } from './add-item-list-form.component';

describe('AddItemListFormComponent', () => {
  let component: AddItemListFormComponent;
  let fixture: ComponentFixture<AddItemListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemListFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
