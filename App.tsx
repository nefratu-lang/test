import React, { useState, useEffect } from 'react';
import { WORKBOOK_SECTIONS } from './constants';
import { Question, QuizState } from './types';
import { generateQuiz } from './services/questionService';
import { 
  BookOpen, 
  CheckCircle, 
  Loader2, 
  RefreshCcw, 
  Award, 
  ChevronRight,
  BrainCircuit,
  AlertCircle,
  XCircle,
  Maximize,
  Minimize
} from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    status: 'IDLE',
    questions: [],
    userAnswers: {},
    score: 0,
    selectedSections: []
  });
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Toggle Full Screen Function
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  // Listen for fullscreen change events (ESC key etc.)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleSection = (id: string) => {
    setState(prev => {
      const isSelected = prev.selectedSections.includes(id);
      return {
        ...prev,
        selectedSections: isSelected
          ? prev.selectedSections.filter(s => s !== id)
          : [...prev.selectedSections, id]
      };
    });
  };

  const selectAllSections = () => {
    setState(prev => ({
        ...prev,
        selectedSections: prev.selectedSections.length === WORKBOOK_SECTIONS.length 
            ? [] 
            : WORKBOOK_SECTIONS.map(s => s.id)
    }));
  };

  const handleStartQuiz = async () => {
    if (state.selectedSections.length === 0) {
      setError("Please select at least one unit to study.");
      return;
    }

    setState(prev => ({ ...prev, status: 'LOADING' }));
    setError(null);

    try {
      const selectedData = WORKBOOK_SECTIONS.filter(s => state.selectedSections.includes(s.id));
      const questions = await generateQuiz(selectedData);
      
      if (questions.length === 0) {
          setError("No questions found for the selected units. Try selecting more.");
          setState(prev => ({ ...prev, status: 'IDLE' }));
          return;
      }

      setState(prev => ({
        ...prev,
        status: 'QUIZ',
        questions,
        userAnswers: {},
        score: 0
      }));
    } catch (err) {
      setState(prev => ({ ...prev, status: 'IDLE' }));
      setError("Failed to generate exam. Please try again.");
    }
  };

  const handleAnswer = (questionId: number, answer: string) => {
    setState(prev => ({
      ...prev,
      userAnswers: { ...prev.userAnswers, [questionId]: answer }
    }));
  };

  const calculateScore = () => {
    let score = 0;
    state.questions.forEach(q => {
      const userAns = state.userAnswers[q.id]?.toLowerCase().trim();
      const correctAns = q.correctAnswer.toLowerCase().trim();
      if (userAns === correctAns) {
        score++;
      }
    });
    setState(prev => ({ ...prev, status: 'RESULTS', score }));
  };

  const resetQuiz = () => {
    setState(prev => ({
      ...prev,
      status: 'IDLE',
      questions: [],
      userAnswers: {},
      score: 0
    }));
  };

  // --- RENDER HELPERS ---

  const renderSetup = () => (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-2">
            <BookOpen className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl font-bold tracking-tight">Naval English Exam</h1>
            </div>
            <p className="text-slate-300">DAMYO A2 Revision Test (Units 4-8)</p>
        </div>
        <div className="absolute right-0 top-0 opacity-10 transform translate-x-10 -translate-y-10">
            <BrainCircuit className="w-64 h-64 text-white" />
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-800">Select Parts</h2>
            <button 
                onClick={selectAllSections}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 underline"
            >
                {state.selectedSections.length === WORKBOOK_SECTIONS.length ? 'Deselect All' : 'Select All'}
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {WORKBOOK_SECTIONS.map(section => (
            <button
              key={section.id}
              onClick={() => toggleSection(section.id)}
              className={`flex flex-col items-start p-4 rounded-lg border-2 transition-all duration-200 text-left h-full ${
                state.selectedSections.includes(section.id)
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-100 hover:border-blue-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className={`font-bold ${state.selectedSections.includes(section.id) ? 'text-blue-700' : 'text-slate-700'}`}>
                  {section.title}
                </span>
                {state.selectedSections.includes(section.id) && (
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                )}
              </div>
              <p className="text-xs text-slate-500 line-clamp-2 leading-tight">{section.topics.join(", ")}</p>
            </button>
          ))}
        </div>

        {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 animate-pulse">
                <AlertCircle className="w-5 h-5"/>
                {error}
            </div>
        )}

        <button
          onClick={handleStartQuiz}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.01] shadow-lg"
        >
          <BrainCircuit className="w-5 h-5" />
          <span>Start Practice Exam</span>
        </button>
      </div>
    </div>
  );

  const renderLoading = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 rounded-full"></div>
        <Loader2 className="w-16 h-16 text-blue-600 animate-spin relative z-10" />
      </div>
      <h2 className="mt-8 text-2xl font-semibold text-slate-800">Preparing Exam...</h2>
      <p className="text-slate-500 mt-2">Loading Naval English questions.</p>
    </div>
  );

  const renderQuiz = () => (
    <div className="max-w-3xl mx-auto pb-12">
      <div className="mb-6 flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-slate-200 sticky top-4 z-20">
        <h2 className="text-xl font-bold text-slate-800">Practice Exam</h2>
        <div className="flex items-center gap-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
            {Object.keys(state.userAnswers).length} / {state.questions.length} Answered
            </span>
            <button 
                onClick={calculateScore}
                className="bg-slate-900 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
                Finish
            </button>
        </div>
      </div>

      <div className="space-y-8">
        {state.questions.map((q, idx) => {
            const userAnswer = state.userAnswers[q.id];
            const isAnswered = !!userAnswer;
            const isCorrect = isAnswered && userAnswer === q.correctAnswer;

            return (
                <div key={q.id} className={`bg-white rounded-xl shadow-sm border p-6 relative overflow-hidden transition-all duration-300 ${isAnswered ? (isCorrect ? 'border-green-200 bg-green-50/10' : 'border-red-200 bg-red-50/10') : 'border-slate-200'}`}>
                    <div className={`absolute top-0 left-0 w-1 h-full ${isAnswered ? (isCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-500'}`}></div>
                    
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2">
                            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded uppercase border border-slate-200">
                                {q.unit}
                            </span>
                            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                                {q.instruction}
                            </span>
                        </div>
                        {isAnswered && (
                            <div className={`flex items-center gap-1 font-bold text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                {isCorrect ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        Correct
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="w-5 h-5" />
                                        Incorrect
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    
                    {q.context && (
                        <div className="mb-4 p-4 bg-slate-50 border-l-4 border-slate-300 text-slate-700 text-sm italic rounded-r leading-relaxed">
                            {q.context}
                        </div>
                    )}
                    
                    <h3 className="text-lg font-medium text-slate-900 mb-6 leading-relaxed">
                        <span className="font-bold text-slate-400 mr-2">{idx + 1}.</span>
                        {q.text.split('______').map((part, i, arr) => (
                            <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && (
                                    <span className="inline-block w-24 border-b-2 border-slate-300 mx-1"></span>
                                )}
                            </React.Fragment>
                        ))}
                    </h3>

                    <div className="grid grid-cols-1 gap-3">
                        {q.options?.map(opt => {
                            const isSelected = userAnswer === opt.id;
                            const isThisCorrect = opt.id === q.correctAnswer;
                            
                            let buttonStyle = "border-slate-200 hover:border-slate-300 hover:bg-slate-50"; // default
                            
                            if (isAnswered) {
                                if (isThisCorrect) {
                                    buttonStyle = "border-green-500 bg-green-50 text-green-800 ring-1 ring-green-500 font-medium";
                                } else if (isSelected && !isThisCorrect) {
                                    buttonStyle = "border-red-500 bg-red-50 text-red-800 ring-1 ring-red-500";
                                } else {
                                    buttonStyle = "border-slate-200 opacity-50 cursor-not-allowed";
                                }
                            }

                            return (
                                <button
                                    key={opt.id}
                                    onClick={() => !isAnswered && handleAnswer(q.id, opt.id)}
                                    disabled={isAnswered}
                                    className={`p-4 text-left rounded-lg border transition-all flex items-center ${buttonStyle}`}
                                >
                                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 border ${
                                        isAnswered && isThisCorrect 
                                            ? 'bg-green-500 text-white border-green-500'
                                            : isAnswered && isSelected && !isThisCorrect
                                                ? 'bg-red-500 text-white border-red-500'
                                                : 'bg-white text-slate-500 border-slate-300'
                                    }`}>
                                        {opt.id.toUpperCase()}
                                    </span>
                                    {opt.text}
                                </button>
                            );
                        })}
                    </div>
                    
                    {isAnswered && (
                        <div className="mt-4 p-3 bg-blue-50 text-blue-800 rounded text-sm border border-blue-100 flex gap-2 items-start animate-fade-in">
                            <span className="font-bold">Explanation:</span>
                            {q.explanation}
                        </div>
                    )}
                </div>
            );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={calculateScore}
          className="px-8 py-4 rounded-lg font-bold text-white shadow-lg transition-all flex items-center gap-2 transform active:scale-95 bg-slate-900 hover:bg-slate-800"
        >
          View Final Results <ChevronRight className="w-5 h-5"/>
        </button>
      </div>
    </div>
  );

  const renderResults = () => {
    const percentage = Math.round((state.score / state.questions.length) * 100);
    let feedback = "";
    if (percentage >= 90) feedback = "Outstanding! Ready for duty, Petty Officer.";
    else if (percentage >= 70) feedback = "Good job. Review the mistakes below.";
    else feedback = "Keep training. Don't give up!";

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden mb-8">
          <div className="bg-slate-900 p-8 text-center text-white relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-5xl font-bold mb-2 tracking-tighter">{percentage}%</h2>
            <p className="text-xl text-slate-300">You scored {state.score} out of {state.questions.length}</p>
            <p className="mt-4 font-medium text-blue-200 bg-white/10 inline-block px-4 py-1 rounded-full">{feedback}</p>
          </div>
          <div className="p-6 bg-slate-50 flex justify-center">
            <button
              onClick={resetQuiz}
              className="bg-white border-2 border-slate-200 text-slate-700 font-bold py-3 px-8 rounded-full hover:bg-slate-100 hover:border-slate-300 flex items-center gap-2 transition-all shadow-sm"
            >
              <RefreshCcw className="w-4 h-4" />
              Start New Exam
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-8 font-sans">
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleFullScreen}
          className="p-3 bg-white rounded-full shadow-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
        </button>
      </div>

      {state.status === 'IDLE' && renderSetup()}
      {state.status === 'LOADING' && renderLoading()}
      {state.status === 'QUIZ' && renderQuiz()}
      {state.status === 'RESULTS' && renderResults()}
    </div>
  );
};

export default App;