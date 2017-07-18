import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SenatorListStateComponent } from './senator-list-state/senator-list-state.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { SavedSenatorListComponent } from './saved-senator-list/saved-senator-list.component';

const appRoutes: Routes=[
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'senators-by-state/:id',
    component: DetailPageComponent
  },
  {
    path: 'saved-senator',
    component: SavedSenatorListComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
