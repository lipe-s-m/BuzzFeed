export type QuizType = {
	nameQuiz: string;
	questions: [
		{
			titleQuestion: string;
			options: [{ content: string; alias: string; idOption: number }];
		}
	];
	result: [{ result: ''; result_text: '' }];
};
