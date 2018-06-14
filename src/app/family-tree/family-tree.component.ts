import { Component, OnInit } from '@angular/core';
import {Action} from '../action';
import {Todo} from '../todo';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent implements OnInit {
  action: Action = {
  id: 1,
  link: '/tree',
  name: 'family tree',
  description: 'create a family tree'
  };
  actions : Action[];

  selectedAction: Action;
  onSelect(action: Action): void {
  this.selectedAction = action;
  }

  todo: Todo = {
    id: 1,
    task: 'changeme',
    description: 'this is to test'
  };
 
  constructor( private actionService: ActionService ){
  }

  getActions(): void {
	this.actionService.getActions()
	.subscribe(actions => this.actions = actions);
  }
  ngOnInit() {
  this.getActions();
  }

}
