import { provideRouter, RouterConfig } from '@angular/router';
import CompositionComponent from './components/composition.component';
import AboutComponent from './components/about.component';

const routes: RouterConfig = [
  { path: 'about', component: AboutComponent },
  { path: '**', component: CompositionComponent }
];

export const ROUTER_PROVIDERS = [
  provideRouter(routes)
];
