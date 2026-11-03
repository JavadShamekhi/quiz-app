import type {QuizResult, Question} from "../types/quiz";

interface ResultScreenProps {
	results: QuizResult[];
	questions: Question[];
	score: number;
	onRestart: () => void;
}

export default function ResultScreen({
	                                     results,
	                                     questions,
	                                     score,
	                                     onRestart,
                                     }: ResultScreenProps) {
	return (
			<div className="result-screen">
				<h1>Quiz Completed!</h1>

				<div className="final-score">
					<h2>{score} / {questions.length}</h2>
					<p>Your Final Score</p>
				</div>

				<div className="results-list">
					{results.map((result, index) => {
						const question = questions.find(
								(item) => item.id === result.questionId,
						);

						if (!question) return null;

						return (
								<div key={result.questionId} className="result-item">
									<h3>
										Question {index + 1}: {question.question}
									</h3>

									<p>
										Your answer:{" "}
										{result.selectedAnswer === null
												? "Not answered (Timeout)"
												: question.options[result.selectedAnswer]}
									</p>

									<p>
										Correct answer:{" "}
										{question.options[result.correctAnswer]}
									</p>

									<span>
                {result.isCorrect ? "Correct" : "Incorrect"}
              </span>
								</div>
						);
					})}
				</div>

				<button onClick={onRestart}>
					Try Again
				</button>
			</div>
	);
}