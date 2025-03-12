import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuoteComponent } from './pages/quote/quote.component';
import { HistoryComponent } from './pages/history/history.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quote', component: QuoteComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'auth', component: AuthComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección en caso de ruta no encontrada
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // 👈 Asegúrate de usar `forRoot`
    exports: [RouterModule]
})
export class AppRoutingModule { }
