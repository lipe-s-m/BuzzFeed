import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { CriarQuizComponent } from './pages/criar-quiz/criar-quiz.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'quiz/:id', component: QuizComponent },
	{ path: 'criarQuiz', component: CriarQuizComponent },
];
