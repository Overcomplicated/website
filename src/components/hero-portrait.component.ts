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
         [class.ana]="hero.name == 'ana'"
         [class.bastion]="hero.name == 'bastion'"
         [class.dva]="hero.name == 'dva'"
         [class.genji]="hero.name == 'genji'"
         [class.hanzo]="hero.name == 'hanzo'"
         [class.junkrat]="hero.name == 'junkrat'"
         [class.lucio]="hero.name == 'lucio'"
         [class.mccree]="hero.name == 'mccree'"
         [class.mei]="hero.name == 'mei'"
         [class.mercy]="hero.name == 'mercy'"
         [class.pharah]="hero.name == 'pharah'"
         [class.reaper]="hero.name == 'reaper'"
         [class.reinhardt]="hero.name == 'reinhardt'"
         [class.roadhog]="hero.name == 'roadhog'"
         [class.soldier76]="hero.name == 'soldier76'"
         [class.symmetra]="hero.name == 'symmetra'"
         [class.torbjorn]="hero.name == 'torbjorn'"
         [class.tracer]="hero.name == 'tracer'"
         [class.widowmaker]="hero.name == 'widowmaker'"
         [class.winston]="hero.name == 'winston'"
         [class.zarya]="hero.name == 'zarya'"
         [class.zenyatta]="hero.name == 'zenyatta'">
    </div>`,
  styles: [`
    :host {
      cursor: pointer;
    }
  `],
  styleUrls: ['css/hero-portrait.component.css'],
})
export class HeroPortraitComponent {
  // tslint:disable-next-line:no-unused-variable
  @Input() private hero: IHero;
  // tslint:disable-next-line:no-unused-variable
  @Input() private small: boolean;

  public isSupport(role: HeroRole): boolean {
    return role === HeroRole.Support;
  }

  public isOffense(role: HeroRole): boolean {
    return role === HeroRole.Offense;
  }

  public isDefense(role: HeroRole): boolean {
    return role === HeroRole.Defense;
  }

  public isTank(role: HeroRole): boolean {
    return role === HeroRole.Tank;
  }
}
