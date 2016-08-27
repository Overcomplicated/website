import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Hero, Heroes } from '../heroes';

interface TeamMember {
  hero: Hero;
  selecting?: boolean;
}

function clone(thing: any): any {
  return JSON.parse(JSON.stringify(thing));
}

@Component({
  selector: 'team-roster',
  template: `
    <div class="enemy-team">
      <hero-portrait *ngFor="let teamMember of teamMembers"
                     [hero]="teamMember.hero"
                     (click)="selectHero(teamMember)"
                     [class.selecting]="teamMember.selecting">
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
  `]
})
export class TeamRosterComponent implements OnInit {
  private teamMembers: TeamMember[];
  private selectedTeamMember: TeamMember;

  @Output() rosterChanged = new EventEmitter();

  constructor() {
    this.teamMembers = [
      { hero: clone(Heroes.McCree) },
      { hero: clone(Heroes.Roadhog) },
      { hero: clone(Heroes.Lucio) },
      { hero: clone(Heroes.Genji) },
      { hero: clone(Heroes.Reinhardt) },
      { hero: clone(Heroes.Zenyatta) }
    ];
  }

  public ngOnInit() {
    this.emitRosterChanged();
  }

  private emitRosterChanged() {
    const roster = this.teamMembers.map(tm => tm.hero.name);
    this.rosterChanged.emit(roster);
  }

  private unselectTeamMember(teamMember: TeamMember) {
    if (teamMember)
      teamMember.selecting = false;
  }

  public selectHero(teamMember: TeamMember) {
    this.unselectTeamMember(this.selectedTeamMember);
    
    this.selectedTeamMember = teamMember;
    teamMember.selecting = true;
  }

  public heroSelected($event: Hero) {
    this.unselectTeamMember(this.selectedTeamMember);

    this.selectedTeamMember.hero = $event;
    this.selectedTeamMember = undefined;
    
    this.emitRosterChanged();
  }
}
