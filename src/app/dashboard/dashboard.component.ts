import { Component, OnInit } from '@angular/core';
import { Action } from '../action';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  actions: Action[] = [];

  constructor( private actionService: ActionService ) {  }

  ngOnInit() {
  this.getActions();
  }
getActions(): void {
	this.actionService.getActions().subscribe(actions => this.actions = actions.slice(1,5));
}
}
