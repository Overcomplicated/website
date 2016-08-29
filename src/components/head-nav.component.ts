import { Component } from '@angular/core';

@Component({
  selector: 'head-nav',
  template: `
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item is-brand" href="http://overcomplicated.gg">
          <h1 class="title is-4">Overcomplicated</h1>
        </a>
      </div>

      <div class="nav-center">
        <a class="nav-item" href="https://github.com/Overcomplicated/website">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
      </div>

      <span class="nav-toggle" [class.is-active]="hamburgerActive" (click)="hamburgerActive = !hamburgerActive">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu" [class.is-active]="hamburgerActive">
        <a class="nav-item" href="//overcomplicated.gg">Home</a>
      </div>
    </nav>`,
})
export class HeadNavComponent {
  // tslint:disable-next-line:no-unused-variable
  private hamburgerActive: boolean = false;
}
