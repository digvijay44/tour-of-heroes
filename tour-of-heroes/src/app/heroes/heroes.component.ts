import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroservice : HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroservice.getHeroes()
    .subscribe(h => this.heroes = h);
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }
}
