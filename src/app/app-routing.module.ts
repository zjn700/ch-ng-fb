import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrammarComponent } from './grammar/grammar.component';
import { FlashcardsComponent } from './flashcards/flashcards.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'grammar', component: GrammarComponent},
  {path: 'flashcards', component: FlashcardsComponent},
  {path: 'vocabulary', component: VocabularyComponent},
  {path: 'profile', component:  ProfileComponent},
  {path: '', redirectTo: '/vocabulary', pathMatch: 'full'},
  {path: '**', component: GrammarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
