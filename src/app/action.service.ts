import { Injectable } from '@angular/core';
import { Action } from './action';
import { ACTIONS } from './mock-actions';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor( private messageService: MessageService) { }
  getActions(): Observable<Action[]> {
  this.messageService.add('ActionService : fetched actions ');
 	return of(ACTIONS);
	}

	getAction(id: number) : Observable<Action> {
  	  // TODO: send the message _after_ fetching the hero
  	this.messageService.add(`HeroService: fetched hero id=${id}`);
  	return of(ACTIONS.find(action => action.id ===id));
	}
}

