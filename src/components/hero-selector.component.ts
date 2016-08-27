import { Component, Output, EventEmitter } from '@angular/core';
import { IHero, AllHeroes } from '../heroes';

@Component({
  selector: 'hero-selector',
  template: `
    <div class="hero-selector">
      <hero-portrait 
        *ngFor="let hero of heroes" 
        (click)="heroClicked(hero)"
        class="hero"
        [hero]="hero"
        [small]="true">
      </hero-portrait>
    </div>
`,
  styles: [`
    .hero-selector {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      border: solid 1px;
    }

    .hero-selector .hero {
      border: solid 1px grey;
    }

    .hero-selector .hero img {
      width: 100%;
    }
  `],
})
export class HeroSelectorComponent {

  // tslint:disable-next-line:no-unused-variable
  private heroes: IHero[] = AllHeroes;

  @Output() private heroSelected = new EventEmitter();

  public heroClicked(hero: IHero) {
    this.heroSelected.emit(hero);
  }
}
