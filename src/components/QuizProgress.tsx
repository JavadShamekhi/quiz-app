interface QuizProgressProps {
	current: number;
	total: number;
}

export default function QuizProgress({
	                                     current,
	                                     total,
                                     }: QuizProgressProps) {
	const progress = (current / total) * 100;

	return (
			<div className="quiz-progress">
				<div className="quiz-progress-info">
					<span>Question {current} / {total}</span>
					<span>{Math.round(progress)}%</span>
				</div>

				<div
						className="progress-track"
						role="progressbar"
						aria-valuenow={current}
						aria-valuemin={0}
						aria-valuemax={total}
						aria-label="Quiz progress"
				>
					<div
							className="progress-fill"
							style={{width: `${progress}%`}}
					/>
				</div>
			</div>
	);
}
