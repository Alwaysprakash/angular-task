import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes = [{ path: 'list', component: ListComponent }];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FormComponent,
    TableComponent,
    ListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
