import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, IHero } from '../services/heroes.service';

@Component({
  selector: 'hero-selector',
  template: `
    <div class="modal" [class.is-active]="active">
      <div class="modal-background"></div>
      <div class="modal-container">
        <div class="modal-content">

          <div class="hero-selector">
            <hero-portrait 
              *ngFor="let hero of heroes" 
              (click)="heroClicked(hero)"
              class="hero"
              [hero]="hero"
              [small]="true">
            </hero-portrait>
          </div>

        </div>
      </div>
      <button class="modal-close" (click)="close()"></button>
    </div>
`,
  styles: [`
    .hero-selector {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .hero-selector .hero {
    }

    .hero-selector .hero img {
      width: 100%;
    }
  `],
  providers: [HeroesService],
})
export class HeroSelectorComponent {

  // tslint:disable-next-line:no-unused-variable
  private heroes: IHero[];

  // tslint:disable-next-line:no-unused-variable
  @Input() private active: boolean;

  @Output() private heroSelected = new EventEmitter<IHero>();

  @Output() private closeClicked = new EventEmitter();

  constructor(private heroesService: HeroesService) {
    this.heroes = heroesService.AllHeroes;
  }

  public heroClicked(hero: IHero) {
    this.heroSelected.emit(hero);
  }

  // tslint:disable-next-line:no-unused-variable
  private close() {
    this.closeClicked.emit();
  }
}
