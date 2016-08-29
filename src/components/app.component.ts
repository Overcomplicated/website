import { Component } from '@angular/core';
import { CompositionAnalyserService } from '../services/composition-analyser.service';
import { IHeroWeaknesses } from './team-roster.component';

@Component({
  selector: 'my-app',
  template: `
    <head-nav></head-nav>
    <section class="section">
      <div class="container">
        <div class="heading">
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
        <div class="heading">
          <h1 class="title">Ally Team</h1>
        </div>
        <team-roster [roster]="allyRoster" 
                     (rosterChange)="allyRosterChanged($event)"
                     [weaknesses]="weaknesses"
                     #allyTeam>
        </team-roster>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Overcomplicated</strong> by <a href="http://www.codesleuth.co.uk">David Wood</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license">MIT</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/Overcomplicated/website">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>`,
  providers: [CompositionAnalyserService],
})
export class AppComponent {
  private enemyRoster: string[] = ['mccree', 'roadhog', 'lucio', 'genji', 'reinhardt', 'zenyatta'];
  private allyRoster: string[] = ['mccree', 'roadhog', 'lucio', 'genji', 'reinhardt', 'zenyatta'];
  private weaknesses: IHeroWeaknesses = {};

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

    this.weaknesses = {};

    analysis.forEach(heroAnalysis => {
      this.weaknesses[heroAnalysis.hero.name] = heroAnalysis.counters.weak.map(e => e.name);
    });
  }
}
