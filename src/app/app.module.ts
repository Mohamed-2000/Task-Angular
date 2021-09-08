import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client-list/client.component';
import { CallsComponent } from './components/calls/calls-list/calls.component';
import { ClientAddComponent } from './components/client/client-add/client-add.component';
import { CallsAddComponent } from './components/calls/calls-add/calls-add.component';
import { CallsEditComponent } from './components/calls/calls-edit/calls-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientEditComponent } from './components/client/client-edit/client-edit.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import{NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SearchfilterPipe } from './searchfilter.pipe';
import { NgxPrintModule } from 'ngx-print';
import { CallsSearchPipe } from './calls-search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    CallsComponent,
    ClientAddComponent,
    CallsAddComponent,
    CallsEditComponent,
    HeaderComponent,
    NotFoundComponent,
    ClientEditComponent,
    RefreshComponent,
    SearchfilterPipe,
    CallsSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
