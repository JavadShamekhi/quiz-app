# Quiz App

A modern, responsive multiple-choice quiz application built with React, TypeScript, and Vite.

Test your knowledge, answer questions within a time limit, track your score, and review your results at the end of each quiz.

## Features

- **Interactive Quiz:** Answer multiple-choice questions with immediate feedback.
- **Timed Questions:** Each question has a 60-second countdown.
- **Score Tracking:** Earn 1 point for every correct answer.
- **Time Penalty:** Lose 1 point when a question times out.
- **Answer Feedback:** Instantly see whether your answer is correct or incorrect.
- **Progress Tracking:** Keep track of your current question and overall progress.
- **Results Summary:** Review your answers and the correct answers after completing the quiz.
- **Restart Quiz:** Start a new attempt whenever you want.
- **Responsive Design:** Optimized for desktop and mobile screens.
- **Component-Based Architecture:** Reusable React components and TypeScript interfaces.

## Project Reference

This project is based on the [Quiz App challenge](https://roadmap.sh/projects/quiz-app) from [roadmap.sh](https://roadmap.sh).

The goal is to build a browser-based multiple-choice quiz application with interactive questions, instant answer feedback, score tracking, and optional timed questions.

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- React Hooks (`useReducer`, `useEffect`)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JavadShamekhi/quiz-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd quiz-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

## Project Structure

```text
src/
├── components/
│   ├── StartScreen.tsx
│   ├── QuizCard.tsx
│   ├── QuizProgress.tsx
│   ├── Timer.tsx
│   └── ResultScreen.tsx
│
├── data/
│   └── questions.ts
│
├── hooks/
│   └── useQuiz.ts
│
├── types/
│   └── quiz.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Architecture

The application uses React's `useReducer` hook to manage quiz state and transitions.

Quiz-related logic is separated from UI components:

- `useQuiz`: Manages quiz state, scoring, question navigation, and timer logic.
- `QuizCard`: Displays the current question and answer options.
- `QuizProgress`: Displays quiz progress.
- `Timer`: Displays the remaining time.
- `StartScreen`: Provides the quiz introduction and start action.
- `ResultScreen`: Displays the final score and answer review.

Questions are maintained separately in `src/data/questions.ts`, making it easy to add or modify quiz content.

## Future Improvements

- Multiple quiz categories and difficulty levels.
- Dynamic question loading from an API.
- User authentication and score history.
- Customizable quiz duration.
- High-score leaderboard.
- Accessibility improvements.