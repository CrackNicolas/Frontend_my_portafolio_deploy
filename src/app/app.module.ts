import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HabilidadesTecnicasComponent } from './components/habilidades-tecnicas/habilidades-tecnicas.component';
import { HabilidadesAdicionalesComponent } from './components/habilidades-adicionales/habilidades-adicionales.component';
import { PasatiemposComponent } from './components/pasatiempos/pasatiempos.component';
import { ViewIconsComponent } from './components/view-icons/view-icons.component';
import { SelectedIconComponent } from './components/selected-icon/selected-icon.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EducacionComponent,
    ProyectoComponent,
    PresentacionComponent,
    ExperienciaLaboralComponent,
    RedesSocialesComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    HabilidadesTecnicasComponent,
    HabilidadesAdicionalesComponent,
    PasatiemposComponent,
    ViewIconsComponent,
    SelectedIconComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }