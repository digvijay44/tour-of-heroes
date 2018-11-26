import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import {  MessageServiceService } from './message-service.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService : MessageServiceService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Product Fetched');
    return of(Heroes);
  }
}
