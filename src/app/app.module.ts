import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './pages/auth/auth.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AuthComponent,
        AppRoutingModule
    ],
    providers: []
})
export class AppModule { }
