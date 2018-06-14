import { Component, OnInit } from '@angular/core';
import {Action} from '../action';
import {Todo} from '../todo';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-action-tree',
  templateUrl: './action-tree.component.html',
  styleUrls: ['./action-tree.component.css']
})
export class ActionTreeComponent implements OnInit {
  action: Action = {
  id: 1,
  link: '/tree',
  name: 'action tree',
  description: 'create a action tree'
  };
  actions : Action[];
    
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
