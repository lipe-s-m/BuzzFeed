import { Injectable, OnInit } from '@angular/core';
import data_quizzes from '../../assets/data/quizzes.json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class QuizzesService {
	quizList: any;
	questionIndex: number = 0;
	questionMaxIndex: number = 0;
	quizIndex: number = 0;
	answers: string[] = [];

	private quizzes = new BehaviorSubject<{
		quizzes: any[];
		questionIndex: number;
		answers: string[];
		finished: boolean;
	}>({
		quizzes: data_quizzes.quizzes,
		questionIndex: 0,
		answers: [],
		finished: false,
	});

	constructor() {
		this.quizList = this.quizzes.getValue().quizzes;
		this.questionMaxIndex =
			this.quizzes.getValue().quizzes[
				this.questionIndex
			].questions.length;
	}

	currentData = this.quizzes.asObservable();

	resetarQuiz() {
		this.questionIndex = 0;
		const quizAtual = this.quizzes.getValue();
		const newQuiz = {
			...quizAtual,
			answers: [],
			questionIndex: 0,
			finished: false,
		};
		this.quizzes.next(newQuiz);
		console.log(newQuiz);
	}

	async updateData(
		parcialData: Partial<{
			quizIndex: number;
			questionIndex: number;
			questionMaxIndex: number;
			answers: string[];
			finished: boolean;
		}>
	) {
		if (
			parcialData.questionIndex &&
			this.questionIndex < this.questionMaxIndex - 1
		) {
			const quizAtual = this.quizzes.getValue();
			const newQuiz = { ...quizAtual, ...parcialData };
			this.questionIndex += 1;
			console.log(newQuiz.answers);

			this.quizzes.next(newQuiz);
		}
		//se for a ultima questao do quiz
		else if (
			parcialData.questionIndex &&
			this.questionIndex >= this.questionMaxIndex - 1
		) {
			parcialData.questionIndex = parcialData.questionIndex
				? parcialData.questionIndex - 1
				: parcialData.questionIndex;

			const quizAtual = this.quizzes.getValue();
			const newQuiz = { ...quizAtual, ...parcialData, finished: true };
			this.quizzes.next(newQuiz);
			console.log(newQuiz.answers);
		}
		//obter id do quiz
		else {
			console.log(parcialData.quizIndex);
			this.quizIndex = parcialData.quizIndex ? parcialData.quizIndex : 1;
			const quizAtual = this.quizzes.getValue();
			const newQuiz = { ...quizAtual, quizIndex: this.quizIndex };
			console.log(newQuiz);
			this.quizzes.next(newQuiz);
			// console.log(this.quiz.getValue());
		}
	}
}
