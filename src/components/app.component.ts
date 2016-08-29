import { Component, OnInit } from '@angular/core';
import { CompositionAnalyserService } from '../services/composition-analyser.service';
import { IHeroWeaknesses } from './team-roster.component';

@Component({
  selector: 'overcomplicated-app',
  template: `
    <head-nav></head-nav>
    <section class="section">
      <div class="container">
        <div class="heading has-text-centered">
          <h1 class="title">Enemy Team</h1>
        </div>
        <team-roster [roster]="enemyRoster"
                     (rosterChange)="enemyRosterChanged($event)"
                     #enemyTeam>
        </team-roster>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="heading has-text-centered">
          <h1 class="title">Ally Team</h1>
        </div>
        <team-roster [roster]="allyRoster" 
                     (rosterChange)="allyRosterChanged($event)"
                     [weaknesses]="weaknesses"
                     #allyTeam>
        </team-roster>
      </div>
    </section>
    <app-footer></app-footer>`,
  providers: [CompositionAnalyserService],
})
export class AppComponent implements OnInit {
  private enemyRoster: string[] = ['mccree', 'roadhog', 'lucio', 'genji', 'reinhardt', 'zenyatta'];
  private allyRoster: string[] = ['mccree', 'roadhog', 'lucio', 'genji', 'reinhardt', 'zenyatta'];
  private weaknesses: IHeroWeaknesses = {};

  constructor(private analyserService: CompositionAnalyserService) { }

  public ngOnInit() {
    this.analyseRoster();
  }

  // tslint:disable-next-line:no-unused-variable
  private enemyRosterChanged(roster: string[]) {
    this.enemyRoster = roster;
    this.analyseRoster();
  }

  // tslint:disable-next-line:no-unused-variable
  private allyRosterChanged(roster: string[]) {
    this.allyRoster = roster;
    this.analyseRoster();
  }

  private analyseRoster() {
    const analysis = this.analyserService.analyse(this.enemyRoster, this.allyRoster);

    this.weaknesses = {};

    analysis.forEach(heroAnalysis => {
      this.weaknesses[heroAnalysis.hero.name] = heroAnalysis.counters.weak.map(e => e.name);
    });
  }
}
