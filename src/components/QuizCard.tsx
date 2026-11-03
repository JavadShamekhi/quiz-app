import type {Question} from "@/types/quiz";
import Timer from "@/components/Timer";
import QuizProgress from "@/components/QuizProgress";

interface QuizCardProps {
	question: Question;
	questionNumber: number;
	totalQuestions: number;
	selectedAnswer: number | null;
	timeLeft: number;
	onSelectAnswer: (index: number) => void;
	onNextQuestion: () => void;
}

export default function QuizCard({
	                                 question,
	                                 questionNumber,
	                                 totalQuestions,
	                                 selectedAnswer,
	                                 timeLeft,
	                                 onSelectAnswer,
	                                 onNextQuestion,
                                 }: QuizCardProps) {
	const hasAnswered = selectedAnswer !== null;

	const isCorrect = selectedAnswer === question.correctAnswer;

	return (
			<div className="quiz-card">
				<div className="quiz-header">
					<span>Frontend Quiz</span>
					<Timer timeLeft={timeLeft}/>
				</div>

				<QuizProgress
						current={questionNumber}
						total={totalQuestions}
				/>

				<h2>{question.question}</h2>

				<div className="options">
					{question.options.map((option, index) => {
						const isSelected = selectedAnswer === index;
						const isCorrectOption = question.correctAnswer === index;

						let className = "option-button";

						if (hasAnswered && isCorrectOption) {
							className += " correct";
						} else if (hasAnswered && isSelected) {
							className += " incorrect";
						}

						return (
								<button
										key={index}
										className={className}
										disabled={hasAnswered}
										onClick={() => onSelectAnswer(index)}
								>
									<span>{String.fromCharCode(65 + index)}.</span>
									{option}
								</button>
						);
					})}
				</div>

				{hasAnswered && (
						<div className="feedback">
							<h3>{isCorrect ? "Correct!" : "Incorrect!"}</h3>

							<p>{question.explanation}</p>

							<button onClick={onNextQuestion}>
								Next Question
							</button>
						</div>
				)}
			</div>
	);
}