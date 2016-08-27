import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { TeamRosterComponent } from './components/team-roster.component';
import { HeroPortraitComponent } from './components/hero-portrait.component';
import { HeroSelectorComponent } from './components/hero-selector.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [TeamRosterComponent, HeroPortraitComponent, HeroSelectorComponent, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
