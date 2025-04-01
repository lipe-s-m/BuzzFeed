import { Injectable, OnInit } from '@angular/core';
import quizz_questions from '../../assets/data/quizz_questions.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SharedService {
	title: string = '';
	questions: any = '';
	questionSelected: any = '';
	questionIndex: number = 0;
	questionMaxIndex: number = 0;
	options: any = '';
	answers: string[] = [];
	finished: boolean = false;

	private quiz = new BehaviorSubject<{
		title: string;
		questions: any;
		questionSelected: any;
		questionIndex: number;
		questionMaxIndex: number;
		options: any;
		answers: string[];
		finished: boolean;
	}>({
		questions: quizz_questions.questions,
		questionIndex: 0,
		questionSelected: quizz_questions.questions[this.questionIndex],
		questionMaxIndex: quizz_questions.questions.length,
		title: quizz_questions.title,
		options: quizz_questions.questions[this.questionIndex].options,
		answers: [],
		finished: false,
	});

	currentData = this.quiz.asObservable();
	constructor() {
		this.questionMaxIndex = this.quiz.getValue().questionMaxIndex;
		this.questionIndex = this.quiz.getValue().questionIndex;
		this.options = this.quiz.getValue().options;
		this.questions = this.quiz.getValue().questions;
	}

	async updateData(
		parcialData: Partial<{
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
		if (this.questionIndex < this.questionMaxIndex - 1) {
			const quizAtual = this.quiz.getValue();
			const newQuiz = { ...quizAtual, ...parcialData };
			this.questionIndex += 1;
			this.quiz.next(newQuiz);
		}
		//se for a ultima questao do quiz
		else if (this.questionIndex >= this.questionMaxIndex - 1) {
			parcialData.questionIndex = parcialData.questionIndex
				? parcialData.questionIndex - 1
				: parcialData.questionIndex;

			const quizAtual = this.quiz.getValue();
			const newQuiz = { ...quizAtual, ...parcialData, finished: true };
			this.quiz.next(newQuiz);
		}
	}
}
