import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoticiasModule } from './noticias/noticias.module';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    NoticiasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
