import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { AppFooterComponent } from './components/app-footer.component';
import { TeamRosterComponent } from './components/team-roster.component';
import { HeroPortraitComponent } from './components/hero-portrait.component';
import { HeroSelectorComponent } from './components/hero-selector.component';
import { HeroesService } from './services/heroes.service';
import { HeadNavComponent } from './components/head-nav.component';
import { IsClippedTogglerDirective } from './directives/is-clipped-toggler.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    TeamRosterComponent,
    HeroPortraitComponent,
    HeroSelectorComponent,
    HeadNavComponent,
    IsClippedTogglerDirective,
    AppFooterComponent,
    AppComponent,
  ],
  bootstrap: [AppComponent],
  providers: [HeroesService],
})
export class AppModule { }
