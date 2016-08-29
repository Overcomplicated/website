import { Component, Input } from '@angular/core';
import { IHero, HeroRole } from '../services/heroes.service';

@Component({
  selector: 'hero-portrait',
  template: `
    <div class="image"
         [class.is-128x128]="!small"
         [class.is-64x64]="small"
         [style.background-image]="'url(assets/heroes/' + (small ? 'small/' : '') + hero.name + '.png)'"
         [class.support]="isSupport(hero.role)"
         [class.offense]="isOffense(hero.role)"
         [class.defense]="isDefense(hero.role)"
         [class.tank]="isTank(hero.role)">
      <!--<img src="assets/heroes/{{small ? 'small/' : ''}}{{hero.name}}.png" />-->
    </div>`,
  styles: [`
    :host {
      cursor: pointer;
    }

    .is-128x128 {
      background-size: 128px;
      background-position-y: 27%;
    }

    .is-64x64 {
      background-size: 72px;
    }

    .image {
      overflow: hidden;
      background-repeat: no-repeat;
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
