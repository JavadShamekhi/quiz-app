import {useQuiz} from "@/hooks/useQuiz";
import {questions} from "@/data/questions";

import StartScreen from "@/components/StartScreen";
import QuizCard from "@/components/QuizCard";
import ResultScreen from "@/components/ResultScreen";

function App() {
	const {state, dispatch} = useQuiz();

	if (state.status === "idle") {
		return (
				<StartScreen
						onStart={() => dispatch({type: "START_QUIZ"})}
				/>
		);
	}

	if (state.status === "completed") {
		return (
				<ResultScreen
						results={state.results}
						questions={questions}
						score={state.score}
						onRestart={() => dispatch({type: "RESET_QUIZ"})}
				/>
		);
	}

	const currentQuestion = questions[state.currentQuestionIndex];

	return (
			<QuizCard
					question={currentQuestion}
					questionNumber={state.currentQuestionIndex + 1}
					totalQuestions={questions.length}
					selectedAnswer={state.selectedAnswer}
					timeLeft={state.timeLeft}
					onSelectAnswer={(index) =>
							dispatch({
								type: "SELECT_ANSWER",
								payload: index,
							})
					}
					onNextQuestion={() =>
							dispatch({type: "NEXT_QUESTION"})
					}
			/>
	);
}

export default App;