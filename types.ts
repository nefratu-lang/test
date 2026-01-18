export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  FILL_BLANK = 'FILL_BLANK',
  DIALOGUE = 'DIALOGUE'
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  unit: string; // e.g., "4A"
  instruction: string;
  context?: string; // For reading or dialogue setup
  text: string; // The question text
  options?: Option[]; // For Multiple Choice
  correctAnswer: string;
  explanation: string;
}

export interface WorkbookSection {
  id: string; // e.g., "4A"
  title: string;
  topics: string[];
}

export interface QuizState {
  status: 'IDLE' | 'LOADING' | 'QUIZ' | 'RESULTS';
  questions: Question[];
  userAnswers: Record<number, string>; // questionId -> answer
  score: number;
  selectedSections: string[];
}