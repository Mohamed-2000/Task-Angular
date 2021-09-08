import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallsAddComponent } from './components/calls/calls-add/calls-add.component';
import { CallsEditComponent } from './components/calls/calls-edit/calls-edit.component';
import { CallsComponent } from './components/calls/calls-list/calls.component';
import { ClientAddComponent } from './components/client/client-add/client-add.component';
import { ClientEditComponent } from './components/client/client-edit/client-edit.component';
import { ClientComponent } from './components/client/client-list/client.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RefreshComponent } from './components/refresh/refresh.component';

const routes: Routes = [
  {path:"client/list", component:ClientComponent},
  {path:"client/add", component:ClientAddComponent},
  {path:"client/edit/:id", component:ClientEditComponent},
  {path:"calls/list", component:CallsComponent},
  {path:"calls/add", component:CallsAddComponent},
  {path:"calls/edit/:id", component:CallsEditComponent},
  {path:"refresh",component:RefreshComponent},
  {path:"", redirectTo:"client/list", pathMatch:"full"},
  {path:"**", component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
