import { Injectable } from '@angular/core';
import quiz from '../../assets/data/quizzes.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SharedService {
	quizIndex: number = 0;
	title: string = '';
	questions: any = '';
	questionSelected: any = '';
	questionIndex: number = 0;
	questionMaxIndex: number = 0;
	options: any = '';
	answers: string[] = [];
	finished: boolean = false;

	private quiz = new BehaviorSubject<{
		quizIndex: number;
		title: string;
		questions: any;
		questionSelected: any;
		questionIndex: number;
		questionMaxIndex: number;
		options: any;
		answers: string[];
		finished: boolean;
	}>({
		quizIndex: 0,
		questions: quiz.quizzes[this.quizIndex].questions,
		questionIndex: 0,
		questionSelected:
			quiz.quizzes[this.quizIndex].questions[this.questionIndex],
		questionMaxIndex: quiz.quizzes[this.quizIndex].questions.length,
		title: quiz.quizzes[this.quizIndex].title,
		options:
			quiz.quizzes[this.quizIndex].questions[this.questionIndex].options,
		answers: [],
		finished: false,
	});

	currentData = this.quiz.asObservable();
	constructor() {
		this.questionMaxIndex = this.quiz.getValue().questionMaxIndex;
		this.questionIndex = this.quiz.getValue().questionIndex;
		this.quizIndex = this.quiz.getValue().quizIndex;
		this.options = this.quiz.getValue().options;
		this.questions = this.quiz.getValue().questions;
	}

	async updateData(
		parcialData: Partial<{
			quizIndex: number;
			title: string;
			questions: any;
			questionSelected: any;
			questionIndex: number;
			questionMaxIndex: number;
			options: any;
			answers: string[];
			finished: boolean;
		}>
	) {
		if (
			parcialData.questionIndex &&
			this.questionIndex < this.questionMaxIndex - 1
		) {
			const quizAtual = this.quiz.getValue();
			const newQuiz = { ...quizAtual, ...parcialData };
			this.questionIndex += 1;
			this.quiz.next(newQuiz);
		}
		//se for a ultima questao do quiz
		else if (
			parcialData.questionIndex &&
			this.questionIndex >= this.questionMaxIndex - 1
		) {
			parcialData.questionIndex = parcialData.questionIndex
				? parcialData.questionIndex - 1
				: parcialData.questionIndex;

			const quizAtual = this.quiz.getValue();
			const newQuiz = { ...quizAtual, ...parcialData, finished: true };
			this.quiz.next(newQuiz);
		}
		//obter id do quiz
		else {
			this.quizIndex = parcialData.quizIndex ? parcialData.quizIndex : 1;
			const quizAtual = this.quiz.getValue();
			const newQuiz = { ...quizAtual, quizIndex: this.quizIndex };
			this.quiz.next(newQuiz);
			// console.log(this.quiz.getValue());
		}
	}
}
