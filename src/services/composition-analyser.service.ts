import { Injectable } from '@angular/core';
import { HeroesService, IHero } from '../services/heroes.service';

@Injectable()
export class CompositionAnalyserService {

  constructor(private heroesService: HeroesService) {}

  public analyse(enemyRoster: string[], allyRoster: string[]) {
    // tslint:disable-next-line:no-console
    console.log(`Analysing enemy roster (${enemyRoster}) vs allies (${allyRoster})...`);

    const enemyHeroes = enemyRoster.map(name => this.heroesService.getHero(name));
    const allyHeroes = allyRoster.map(name => this.heroesService.getHero(name));

    // tslint:disable-next-line:no-console
    console.log('enemyHeroes: ', enemyHeroes);
    // tslint:disable-next-line:no-console
    console.log('allyHeroes: ', allyHeroes);

    const enemiesCountered = allyHeroes.forEach(allyHero => enemyHeroes.forEach(enemyHero => this.isCounter(allyHero, enemyHero)));

    // tslint:disable-next-line:no-console
    console.log(`enemiesCountered: ${enemiesCountered}`);
  }

  private isCounter(subject: IHero, target: IHero) {
    return target.counters.weak.some(targetWeakness => targetWeakness.name === subject.name)
      || subject.counters.strong.some(subjectStrength => subjectStrength.name === target.name);
  }
}
