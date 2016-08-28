import { Injectable } from '@angular/core';
import { HeroesService, IHero } from '../services/heroes.service';

export interface IHeroAnalysis {
  hero: IHero;
  counters: {
    strong: IHero[],
    weak: IHero[],
  };
}

@Injectable()
export class CompositionAnalyserService {

  constructor(private heroesService: HeroesService) {}

  public analyse(enemyRoster: string[], allyRoster: string[]): IHeroAnalysis[] {
    const enemyHeroes = enemyRoster.map(name => this.heroesService.getHero(name));
    const allyHeroes = allyRoster.map(name => this.heroesService.getHero(name));

    const analysis = allyHeroes.map(allyHero => {
      const strong = enemyHeroes.filter(enemyHero => this.isCounter(allyHero, enemyHero));
      const weak = enemyHeroes.filter(enemyHero => this.isCounteredBy(allyHero, enemyHero));
      const heroAnalysis: IHeroAnalysis = {
        hero: allyHero,
        counters: {
          strong: strong,
          weak: weak,
        },
      };
      return heroAnalysis;
    });

    return analysis;
  }

  private isCounter(subject: IHero, target: IHero) {
    return target.counters.weak.some(targetWeakness => targetWeakness.name === subject.name)
      || subject.counters.strong.some(subjectStrength => subjectStrength.name === target.name);
  }

  private isCounteredBy(subject: IHero, target: IHero) {
    return target.counters.strong.some(targetStrengths => targetStrengths.name === subject.name)
      || subject.counters.weak.some(subjectWeakness => subjectWeakness.name === target.name);
  }
}
