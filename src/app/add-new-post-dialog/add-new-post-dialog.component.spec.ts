import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPostDialogComponent } from './add-new-post-dialog.component';

describe('AddNewPostDialogComponent', () => {
  let component: AddNewPostDialogComponent;
  let fixture: ComponentFixture<AddNewPostDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPostDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
