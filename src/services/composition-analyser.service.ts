import { Injectable } from '@angular/core';

@Injectable()
export class CompositionAnalyserService {
  public analyse(enemyRoster: string[], allyRoster: string[]) {
    console.log(`Analysing enemy roster (${enemyRoster}) vs allies (${allyRoster})...`);
  }
}