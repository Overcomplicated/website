import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, IHero } from '../services/heroes.service';

interface ITeamMember {
  hero: IHero;
  selecting?: boolean;
}

@Component({
  selector: 'team-roster',
  template: `
    <div class="enemy-team">
      <hero-portrait *ngFor="let teamMember of _roster"
                     [hero]="teamMember.hero"
                     (click)="selectHero(teamMember)"
                     [class.selecting]="teamMember.selecting"
                     [class.weak]="!!weaknesses && weaknesses.indexOf('teamMember.hero.name') > -1">
      </hero-portrait>
    </div>
    <hero-selector *ngIf="!!selectedTeamMember"
                   (heroSelected)="heroSelected($event)">
    </hero-selector>
  `,
  styles: [`
    .enemy-team {
      display: flex;
      justify-content: space-around;
      border: solid 1px;
    }

    .selecting {
      opacity: 0.4;
      filter: alpha(opacity=40);

      border: solid 1px red;
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
  @Input() private weaknesses: { [name: string]: string[] };

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
}
