import { Component, Input } from '@angular/core';
import { IHero, HeroRole } from '../services/heroes.service';

@Component({
  selector: 'hero-portrait',
  template: `
    <div class="hero-portrait"
         [class.small]="small"
         [class.support]="isSupport(hero.role)"
         [class.offense]="isOffense(hero.role)"
         [class.defense]="isDefense(hero.role)"
         [class.tank]="isTank(hero.role)"
         [class.ana]="isHero('ana')"
         [class.bastion]="isHero('bastion')"
         [class.dva]="isHero('dva')"
         [class.genji]="isHero('genji')"
         [class.hanzo]="isHero('hanzo')"
         [class.junkrat]="isHero('junkrat')"
         [class.lucio]="isHero('lucio')"
         [class.mccree]="isHero('mccree')"
         [class.mei]="isHero('mei')"
         [class.mercy]="isHero('mercy')"
         [class.pharah]="isHero('pharah')"
         [class.reaper]="isHero('reaper')"
         [class.reinhardt]="isHero('reinhardt')"
         [class.roadhog]="isHero('roadhog')"
         [class.soldier76]="isHero('soldier76')"
         [class.symmetra]="isHero('symmetra')"
         [class.torbjorn]="isHero('torbjorn')"
         [class.tracer]="isHero('tracer')"
         [class.widowmaker]="isHero('widowmaker')"
         [class.winston]="isHero('winston')"
         [class.zarya]="isHero('zarya')"
         [class.zenyatta]="isHero('zenyatta')">
      <span>{{hero.displayName}}</span>
    </div>`,
  styleUrls: ['css/hero-portrait.component.css'],
})
export class HeroPortraitComponent {
  @Input() private hero: IHero;
  @Input() private small: boolean;

  private isSupport(role: HeroRole): boolean {
    return role === HeroRole.Support;
  }

  private isOffense(role: HeroRole): boolean {
    return role === HeroRole.Offense;
  }

  private isDefense(role: HeroRole): boolean {
    return role === HeroRole.Defense;
  }

  private isTank(role: HeroRole): boolean {
    return role === HeroRole.Tank;
  }

  private isHero(name: string): boolean {
    return this.hero.name === name;
  }
}
