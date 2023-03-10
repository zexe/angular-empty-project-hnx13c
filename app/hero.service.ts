import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock_heroes';

//@Injectable({ providedIn: 'root' })
@Injectable()
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = Observable.of(HEROES);
    return heroes;
  }
}
