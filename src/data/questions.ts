import type { Question } from "../types/quiz";

export const questions: Question[] = [
	{
		id: 1,
		question: "Which method is used to create a new array from an existing array?",
		options: ["forEach()", "map()", "filter()", "reduce()"],
		correctAnswer: 1,
		explanation: "map() creates a new array by transforming each element.",
	},
	{
		id: 2,
		question: "What is the output of typeof null in JavaScript?",
		options: ["null", "undefined", "object", "number"],
		correctAnswer: 2,
		explanation: "typeof null returns object due to a historical JavaScript behavior.",
	},
	{
		id: 3,
		question: "Which React hook is used to manage local component state?",
		options: ["useEffect", "useMemo", "useState", "useRef"],
		correctAnswer: 2,
		explanation: "useState allows functional components to manage state.",
	},
	{
		id: 4,
		question: "What does CSS Flexbox primarily help with?",
		options: [
			"Database management",
			"One-dimensional layouts",
			"API requests",
			"Component lifecycle",
		],
		correctAnswer: 1,
		explanation: "Flexbox is designed for one-dimensional layouts.",
	},
	{
		id: 5,
		question: "Which keyword declares a block-scoped variable in JavaScript?",
		options: ["var", "function", "let", "import"],
		correctAnswer: 2,
		explanation: "let declares a variable with block scope.",
	},
];