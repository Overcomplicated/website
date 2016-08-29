import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, IHero } from '../services/heroes.service';

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
        <span *ngFor="let strength of teamMember.strengths"
              class="icon is-large strength"
              title="{{getHero(strength).displayName}}">
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
        </span>
        <span *ngFor="let weakness of teamMember.weaknesses"
              class="icon is-large weakness"
              title="{{getHero(weakness).displayName}}">
          <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
        </span>
      </div>
    </div>
    <hero-selector *ngIf="!!selectedTeamMember"
                   (heroSelected)="heroSelected($event)">
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
  `],
  providers: [HeroesService],
})
export class TeamRosterComponent {
  private _roster: ITeamMember[];
  private selectedTeamMember: ITeamMember;

  @Output() private rosterChange = new EventEmitter<string[]>();

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
    teamMember.selecting = true;
  }

  public heroSelected(hero: IHero) {
    this.unselectTeamMember(this.selectedTeamMember);

    this.selectedTeamMember.hero = hero;
    this.selectedTeamMember = undefined;

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
}
