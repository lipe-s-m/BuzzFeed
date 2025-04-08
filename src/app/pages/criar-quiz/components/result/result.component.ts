import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'criar-quiz-result',
	imports: [],
	templateUrl: './result.component.html',
	styleUrl: './result.component.css',
})
export class CriarResultComponent {
	constructor(private router: Router) {}
}
