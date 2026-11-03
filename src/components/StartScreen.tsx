interface StartScreenProps {
	onStart: () => void;
}

export default function StartScreen({
	                                    onStart,
                                    }: StartScreenProps) {
	return (
			<div className="start-screen">
				<h1>Frontend Quiz</h1>

				<p>
					Test your knowledge of JavaScript, React and CSS.
				</p>

				<div className="quiz-info">
					<span>5 Questions</span>
					<span>60 Seconds / Question</span>
				</div>

				<button onClick={onStart}>
					Start Quiz
				</button>
			</div>
	);
}