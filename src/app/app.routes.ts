import { Routes } from '@angular/router';
import {PokemonSearch} from './feature/search/search';

export const routes: Routes = [
  {
    path: 'pokemon',
    component: PokemonSearch,
  },
  {
    path: 'pokemon/:id',
    loadComponent: () => import('./feature/detail/detail').then(m => m.PokemonDetail),
  },
  {
    path: "**",
    redirectTo: "pokemon",
  }
];
