import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Action } from '../action';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.css']
})
export class ActionDetailComponent implements OnInit {

@Input() action: Action;

  constructor( private route: ActivatedRoute,
  private actionService: ActionService,
  private location: Location ) { }

  ngOnInit() {
  this.getAction();
  }

  getAction(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.actionService.getAction(id)
  .subscribe(action => this.action = action);
  }
  goBack(): void {
    this.location.back();
  }
}
