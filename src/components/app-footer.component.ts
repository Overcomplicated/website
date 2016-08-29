import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
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
})
export class AppFooterComponent {
}
