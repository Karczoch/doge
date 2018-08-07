import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPostComponent } from './user-post/user-post.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { UserPostStartComponent } from './user-post/user-post-start/user-post-start.component';
import { UserPostDetailComponent } from './user-post/user-post-detail/user-post-detail.component';
// import { RecipeEditComponent } from './user-post/user-post-edit/user-post-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'wall', component: UserPostComponent, children: [
    { path: '', component: UserPostStartComponent },
//     // { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: UserPostDetailComponent },
//     // { path: ':id/edit', component: RecipeEditComponent },
  ] },
  // { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}