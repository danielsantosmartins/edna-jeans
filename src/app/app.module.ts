import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { CabecalhoComponent } from './shared/cabecalho/cabecalho.component';
import { BannerComponent } from './shared/banner/banner.component';
import { PropagandaComponent } from './shared/propaganda/propaganda.component';
import { ProdutosComponent } from './shared/produtos/produtos.component';
import { ContatosComponent } from './shared/contatos/contatos.component';
import { RodapeComponent } from './shared/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    BannerComponent,
    PropagandaComponent,
    ProdutosComponent,
    ContatosComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
