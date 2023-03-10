import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock_heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];

  selectedHero_ausw?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero_inp: Hero): void {
    this.selectedHero_ausw = hero_inp;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
