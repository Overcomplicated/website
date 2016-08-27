import { Component, Input } from '@angular/core';
import { Hero, HeroRole } from '../heroes';

@Component({
  selector: 'hero-portrait',
  template: `
    <div class="hero-portrait"
         [style.width]="small ? '112px' : '180px'"
         [class.support]="isSupport(hero.role)"
         [class.offense]="isOffense(hero.role)"
         [class.defense]="isDefense(hero.role)"
         [class.tank]="isTank(hero.role)">
      <img src="assets/heroes/{{ small ? 'small/' : '' }}{{hero.name}}.png" />
    </div>`,
  styles: [`
    .hero-portrait {
      border: solid 1px grey;
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
  `]
})
export class HeroPortraitComponent {
  @Input() hero: Hero;
  @Input() small: boolean; 

  public isSupport(role: HeroRole): boolean {
    return role == HeroRole.Support;
  }

  public isOffense(role: HeroRole): boolean {
    return role == HeroRole.Offense;
  }

  public isDefense(role: HeroRole): boolean {
    return role == HeroRole.Defense;
  }

  public isTank(role: HeroRole): boolean {
    return role == HeroRole.Tank;
  }
}
