
interface TimerProps {
	timeLeft: number;
}

export default function Timer({ timeLeft }: TimerProps) {
	const isDanger = timeLeft <= 10;

	return (
			<span className={isDanger ? "timer danger" : "timer"}>
      {timeLeft}s
    </span>
	);
}
