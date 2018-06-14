import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTreeComponent } from './action-tree.component';

describe('ActionTreeComponent', () => {
  let component: ActionTreeComponent;
  let fixture: ComponentFixture<ActionTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
