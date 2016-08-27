import { Component } from '@angular/core';
import { CompositionAnalyserService } from '../services/composition-analyser.service'

@Component({
  selector: 'my-app',
  template: `
    <h1>Overwatch Composition Helper</h1>
    <div class="wrap">
      <div>
        <team-roster (rosterChanged)="enemyRosterChanged($event)"></team-roster>
      </div>
      <div>
        <p>VS</p>
      </div>
      <div>
        <team-roster (rosterChanged)="allyRosterChanged($event)"></team-roster>
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
  providers: [CompositionAnalyserService]
})
export class AppComponent {
  private enemyRoster: string[];
  private allyRoster: string[];

  constructor(private analyserService: CompositionAnalyserService) { }

  private enemyRosterChanged(roster: string[]) {
    this.enemyRoster = roster;
    this.analyseRoster();
  }

  private allyRosterChanged(roster: string[]) {
    this.allyRoster = roster;
    this.analyseRoster();
  }

  private analyseRoster() {
    this.analyserService.analyse(this.enemyRoster, this.allyRoster);
  }
}
