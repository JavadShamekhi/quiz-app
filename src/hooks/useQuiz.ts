import {useEffect, useReducer} from "react";
import type {QuizState, QuizAction} from "@/types/quiz";
import {questions} from "@/data/questions";

const INITIAL_TIME = 60;

const initialState: QuizState = {
	status: "idle",
	currentQuestionIndex: 0,
	score: 0,
	selectedAnswer: null,
	timeLeft: INITIAL_TIME,
	results: [],
};

function quizReducer(
		state: QuizState,
		action: QuizAction,
): QuizState {
	switch (action.type) {
		case "START_QUIZ":
			return {
				...initialState,
				status: "playing",
			};

		case "SELECT_ANSWER": {
			if (
					state.status !== "playing" ||
					state.selectedAnswer !== null
			) {
				return state;
			}

			const currentQuestion = questions[state.currentQuestionIndex];

			if (
					!Number.isInteger(action.payload) ||
					action.payload < 0 ||
					action.payload >= currentQuestion.options.length
			) {
				return state;
			}

			const isCorrect =
					action.payload === currentQuestion.correctAnswer;

			return {
				...state,
				selectedAnswer: action.payload,
				score: isCorrect ? state.score + 1 : state.score,
				results: [
					...state.results,
					{
						questionId: currentQuestion.id,
						selectedAnswer: action.payload,
						correctAnswer: currentQuestion.correctAnswer,
						isCorrect,
					},
				],
			};
		}

		case "NEXT_QUESTION": {
			if (
					state.status !== "playing" ||
					state.selectedAnswer === null
			) {
				return state;
			}

			const isLastQuestion =
					state.currentQuestionIndex === questions.length - 1;

			if (isLastQuestion) {
				return {
					...state,
					status: "completed",
				};
			}

			return {
				...state,
				currentQuestionIndex: state.currentQuestionIndex + 1,
				selectedAnswer: null,
				timeLeft: INITIAL_TIME,
			};
		}

		case "TICK": {
			if (
					state.status !== "playing" ||
					state.selectedAnswer !== null
			) {
				return state;
			}

			if (state.timeLeft > 1) {
				return {
					...state,
					timeLeft: state.timeLeft - 1,
				};
			}

			const currentQuestion = questions[state.currentQuestionIndex];
			const isLastQuestion =
					state.currentQuestionIndex === questions.length - 1;

			return {
				...state,
				score: state.score - 1,
				results: [
					...state.results,
					{
						questionId: currentQuestion.id,
						selectedAnswer: null,
						correctAnswer: currentQuestion.correctAnswer,
						isCorrect: false,
					},
				],
				status: isLastQuestion ? "completed" : "playing",
				currentQuestionIndex: isLastQuestion
						? state.currentQuestionIndex
						: state.currentQuestionIndex + 1,
				selectedAnswer: null,
				timeLeft: INITIAL_TIME,
			};
		}

		case "RESET_QUIZ":
			return initialState;

		default:
			return state;
	}
}

export function useQuiz() {
	const [state, dispatch] = useReducer(
			quizReducer,
			initialState,
	);

	useEffect(() => {
		if (
				state.status !== "playing" ||
				state.selectedAnswer !== null
		) {
			return;
		}

		const intervalId = window.setInterval(() => {
			dispatch({type: "TICK"});
		}, 1000);

		return () => window.clearInterval(intervalId);
	}, [
		state.status,
		state.selectedAnswer,
		state.currentQuestionIndex,
	]);

	return {
		state,
		dispatch,
	};
}
