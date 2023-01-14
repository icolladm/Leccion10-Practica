import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RedColorDirective } from './directivas/red-color.directive';
import { BorderColorDirective } from './directivas/border-color.directive';
import { HttpClientModule } from '@angular/common/http';
import { GamesComponent } from './pages/games/games.component';
import { GameService } from './servicios/game.service';
import { ClicGameDirective } from './directivas/clic-game.directive';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    CurriculumComponent,
    FormularioComponent,
    LoginComponent,
    RedColorDirective,
    BorderColorDirective,
    GamesComponent,
    ClicGameDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
