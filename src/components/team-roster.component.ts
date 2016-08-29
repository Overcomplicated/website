import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, IHero } from '../services/heroes.service';
import { IsClippedTogglerDirective } from '../directives/is-clipped-toggler.directive';

interface ITeamMember {
  hero: IHero;
  selecting?: boolean;
  strengths?: string[];
  weaknesses?: string[];
}

export interface IHeroWeaknesses {
  [name: string]: string[];
}

@Component({
  selector: 'team-roster',
  template: `
    <div class="team">
      <div class="team-member" *ngFor="let teamMember of _roster">
        <hero-portrait [hero]="teamMember.hero"
                       (click)="selectHero(teamMember)"
                       [class.selecting]="teamMember.selecting"
                       [class.weak]="!!weaknesses && weaknesses.indexOf('teamMember.hero.name') > -1">
        </hero-portrait>
        <div class="advice">
          <span *ngFor="let strength of teamMember.strengths"
                class="icon is-large strength"
                title="{{getHero(strength).displayName}}">
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </span>
          <ul>
            <li *ngFor="let weakness of teamMember.weaknesses">
              <span class="icon weakness"
                  title="{{getHero(weakness).displayName}}">
                <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
              </span>
              {{getHero(weakness).displayName}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hero-selector [active]="!!selectedTeamMember"
                   [isClippedToggler]="!!selectedTeamMember"
                   (heroSelected)="heroSelected($event)"
                   (closeClicked)="closeClicked()">
    </hero-selector>
  `,
  styles: [`
    .team {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .icon.weakness {
      color: #e00;
      text-shadow: 1px 1px 1px #222;
    }

    .icon.strength {
      color: #0e0;
      text-shadow: 1px 1px 1px #222;
    }

    .selecting {
      opacity: 0.4;
      filter: alpha(opacity=40);

      cursor: default;
    }

    .advice {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      max-width: 138px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      padding-left: 1.3em;
    }
  `],
  providers: [HeroesService],
  directives: [IsClippedTogglerDirective],
})
export class TeamRosterComponent {
  private _roster: ITeamMember[];
  private selectedTeamMember: ITeamMember;

  @Output() private rosterChange = new EventEmitter<string[]>();

  @Output() private clipBody = new EventEmitter<boolean>();

  @Input() private set roster(heroes: string[]) {
    this._roster = heroes.map(name => {
      const hero = this.heroesService.getHero(name);
      const teamMember: ITeamMember = { hero: hero };
      return teamMember;
    });
  }

  // tslint:disable-next-line:no-unused-variable
  @Input() private set weaknesses(data: IHeroWeaknesses) {
    this._roster.forEach(member => {
      member.weaknesses = data[member.hero.name] || [];
    });
  }

  constructor(private heroesService: HeroesService) {}

  public selectHero(teamMember: ITeamMember) {
    this.unselectTeamMember(this.selectedTeamMember);

    this.selectedTeamMember = teamMember;
    this.clipBody.emit(true);
    teamMember.selecting = true;
  }

  public heroSelected(hero: IHero) {
    this.unselectTeamMember(this.selectedTeamMember);

    this.selectedTeamMember.hero = hero;
    this.selectedTeamMember = undefined;
    this.clipBody.emit(false);

    this.emitRosterChanged();
  }

  private emitRosterChanged() {
    this.rosterChange.emit(this._roster.map(member => member.hero.name));
  }

  private unselectTeamMember(teamMember: ITeamMember) {
    if (teamMember) {
      teamMember.selecting = false;
    }
  }

  // tslint:disable-next-line:no-unused-variable
  private getHero(name: string): IHero {
    return this.heroesService.getHero(name);
  }

  // tslint:disable-next-line:no-unused-variable
  private closeClicked() {
    this.selectedTeamMember = undefined;
    this.clipBody.emit(false);
  }
}
