import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { ComponentToViewComponent } from './components/component-to-view/component-to-view.component';
import { ViewToComponentComponent } from './components/view-to-component/view-to-component.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { StructuralComponent } from './components/structural/structural.component';
import { AttributeComponent } from './components/attribute/attribute.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentToViewComponent,
    ViewToComponentComponent,
    TwoWayBindingComponent,
    StructuralComponent,
    AttributeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
