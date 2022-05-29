import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user-groups',
    loadChildren: () => import('ionic-ng-user-groups-ui').then(m => m.UserGroupsPageModule)
  },
  // {
  //   path: true?'links':'',
  //   loadChildren: () => import('ionic-ng-links-ui').then(m => m.LinksPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
