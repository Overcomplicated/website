import { Component, Input } from '@angular/core';
import { IHero, HeroRole } from '../services/heroes.service';

@Component({
  selector: 'hero-portrait',
  template: `
    <div class="hero-portrait"
         [style.background-image]="'url(assets/heroes/' + (small ? 'small/' : '') + hero.name + '.png)'"
         [class.small]="small"
         [class.support]="isSupport(hero.role)"
         [class.offense]="isOffense(hero.role)"
         [class.defense]="isDefense(hero.role)"
         [class.tank]="isTank(hero.role)">
      
    </div>`,
  styles: [`
    :host {
      cursor: pointer;
    }

    .hero-portrait {
      width: 180px;
      height: 310px;
    }

    .support {
      background-color: green;
    }

    .offense {
      background-color: red;
    }

    .defense {
      background-color: blue;
    }

    .tank {
      background-color: grey;
    }

    .small {
      width: 112px;
      height: 100px;
    }
  `],
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
