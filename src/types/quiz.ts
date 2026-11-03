export interface Question {
	id: number;
	question: string;
	options: string[];
	correctAnswer: number;
	explanation: string;
}

export interface QuizResult {
	questionId: number;
	selectedAnswer: number | null;
	correctAnswer: number;
	isCorrect: boolean;
}

export type QuizStatus = "idle" | "playing" | "completed";

export interface QuizState {
	status: QuizStatus;
	currentQuestionIndex: number;
	score: number;
	selectedAnswer: number | null;
	timeLeft: number;
	results: QuizResult[];
}

export type QuizAction =
		| { type: "START_QUIZ" }
		| { type: "SELECT_ANSWER"; payload: number }
		| { type: "NEXT_QUESTION" }
		| { type: "TICK" }
		| { type: "RESET_QUIZ" };