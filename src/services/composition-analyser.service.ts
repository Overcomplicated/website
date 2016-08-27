import { Injectable } from '@angular/core';

@Injectable()
export class CompositionAnalyserService {
  public analyse(enemyRoster: string[], allyRoster: string[]) {
    // tslint:disable-next-line:no-console
    console.log(`Analysing enemy roster (${enemyRoster}) vs allies (${allyRoster})...`);
  }
}
