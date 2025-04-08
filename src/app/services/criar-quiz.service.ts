import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizType } from '../models/quiz';

@Injectable({
	providedIn: 'root',
})
export class CriarQuizService {
	constructor() {}

	private quiz$ = new BehaviorSubject<QuizType>({
		nameQuiz: '',
		questions: [
			{
				titleQuestion: '',
				options: [
					{
						content: '',
						alias: '',
						idOption: 0,
					},
				],
			},
		],
		result: [
			{
				result: '',
				result_text: '',
			},
		],
	});
	currentData = this.quiz$.asObservable();

	updateData(parcialData: Partial<QuizType>) {
		console.log(parcialData);
		const quizAtual = this.quiz$.getValue();
		const newQuiz = { ...quizAtual, ...parcialData };
		this.quiz$.next(newQuiz);
	}
	resetQuiz() {
		this.quiz$.next({
			nameQuiz: '',
			questions: [
				{
					options: [{ content: '', alias: '', idOption: 1 }],
					titleQuestion: '',
				},
			],
			result: [{ result: '', result_text: '' }],
		});
	}
}
