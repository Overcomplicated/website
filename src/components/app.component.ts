import { Component } from '@angular/core';
import { CompositionAnalyserService } from '../services/composition-analyser.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Overwatch Composition Helper</h1>
    <div class="wrap">
      <div>
        <team-roster [roster]="enemyRoster"
                     (rosterChange)="enemyRosterChanged($event)"
                     #enemyTeam>
        </team-roster>
      </div>
      <div>
        <p>VS</p>
      </div>
      <div>
        <team-roster [roster]="allyRoster" 
                     (rosterChange)="allyRosterChanged($event)"
                     [weaknesses]="weaknesses"
                     #allyTeam>
        </team-roster>
      </div>
    </div>`,
  styles: [`
    .wrap {
      width: 100%;
      max-width: 1250px;
      margin-left: auto;
      margin-right: auto;
    }
  `],
  providers: [CompositionAnalyserService],
})
export class AppComponent {
  private enemyRoster: string[] = ['mccree', 'roadhog', 'lucio', 'genji', 'reinhardt', 'zenyatta'];
  private allyRoster: string[] = ['mccree', 'roadhog', 'lucio', 'genji', 'reinhardt', 'zenyatta'];
  private weaknesses: string[] = [];

  constructor(private analyserService: CompositionAnalyserService) { }

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

    this.weaknesses = analysis
      .filter(heroAnalysis => heroAnalysis.counters.weak.length > 0)
      .map(heroAnalysis => heroAnalysis.hero.name);

    // tslint:disable-next-line:no-console
    console.log(this.weaknesses);

    // analysis.forEach(heroAnalysis => {
    //   heroAnalysis.counters.weak.forEach(weakness => {
    //     this.advice += "<br/>"
    //   })
    // });
  }
}
