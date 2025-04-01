import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../services/shared.service';
import { count } from 'rxjs';

@Component({
	selector: 'app-result',
	imports: [],
	templateUrl: './result.component.html',
	styleUrl: './result.component.css',
})
export class ResultComponent implements OnInit {
	answers: string[] = [];
	constructor(private sharedService: SharedService) {}
	ngOnInit(): void {
		this.sharedService.currentData.subscribe((data) => {
			this.answers = data.answers;
			if (data.finished) {
				this.calcularResultado();
			}
		});
	}
	calcularResultado(): string {
		let countA = 0;
		let countB = 0;
		this.answers.forEach((answer) => {
			if (answer === 'A') countA += 1;
			if (answer === 'B') countB += 1;
		});

		return countA > countB
			? 'Você é um Super Vilão!'
			: 'Você é um Super Herói!';
	}
}
