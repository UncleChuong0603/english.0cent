"use client";

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import fetchExercise from '@/helpers/fetchExercise';

const ExerciseDetails = (props) => {
  const [exerciseContent, setExerciseContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});
  const [showCorrectAnswer, setShowCorrectAnswer] = useState({});

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        const exerciseData = await fetchExercise(`filters[slug][$eq]=${props.params.exercise}`);
        if (exerciseData.data.length === 0) {
          setError('Exercise not found');
        } else {
          setExerciseContent(exerciseData.data[0]);

          const headings = exerciseData.data[0].attributes.Question.questions.map((item, index) => ({
            id: `question-${index}`,
            text: item.question,
            level: 2
          }));
          setToc(headings);
        }
      } catch (err) {
        setError('Error fetching exercise data');
      } finally {
        setLoading(false);
      }
    };

    fetchLessonData();
  }, [props.params.exercise]);

  const handleScroll = useCallback(() => {
    const contentElement = document.querySelector('.lesson-content');
    if (!contentElement || !document.hasFocus()) return;

    const { scrollTop } = contentElement;
    let activeHeadingId = null;

    toc.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        const offsetTop = element.offsetTop - contentElement.offsetTop;
        if (scrollTop >= offsetTop) {
          activeHeadingId = heading.id;
        }
      }
    });

    setActiveId(activeHeadingId);
  }, [toc]);

  useEffect(() => {
    let timeoutId;
    const handleDocumentFocus = () => {
      timeoutId = setTimeout(handleScroll, 200);
    };

    document.addEventListener('focus', handleDocumentFocus);
    handleScroll();

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('focus', handleDocumentFocus);
    };
  }, [handleScroll]);

  const handleAnswerChange = (questionIndex, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = (questionIndex, correctAnswer) => {
    setSubmitted((prevSubmitted) => ({
      ...prevSubmitted,
      [questionIndex]: true
    }));
    setShowCorrectAnswer((prevCorrectAnswer) => ({
      ...prevCorrectAnswer,
      [questionIndex]: answers[questionIndex] === correctAnswer
    }));
  };

  if (loading) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>Loading...</div>;
  if (error) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>{error}</div>;

  const renderContent = (questions) => {
    return questions.map((item, index) => {
      const questionId = `question-${index}`;
      const selectedAnswer = answers[index];
      const isSubmitted = submitted[index];
      const isCorrect = showCorrectAnswer[index];

      const choices = Object.entries(item.choices).map(([key, value]) => (
        <div key={key} className="flex items-center border border-gray-300 rounded-lg p-2 space-x-4">
          <input
            type="radio"
            name={questionId}
            value={key}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            disabled={isSubmitted}
          />
          <span dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      ));

      return (
        <div key={index} className={`mt-12 flex-col space-y-4 ${activeId === questionId ? 'rounded-lg bg-yellow-300 font-bold p-4' : ''}`}>
          <h3 dangerouslySetInnerHTML={{ __html: item.question }} />
          <div className="grid grid-cols-2 gap-4">
            {choices}
          </div>
          {isSubmitted && (
            <div className="mt-4">
              <p className={isCorrect ? 'text-green-500' : 'text-red-500'}>Correct answer: {item.answer.toUpperCase()}</p>
              <p className={isCorrect ? 'text-green-500' : 'text-red-500'} dangerouslySetInnerHTML={{ __html: item.explanation }} />
            </div>
          )}
          {!isSubmitted && (
            <div className='mt-4 flex-center'>
                <Button onClick={() => handleSubmit(index, item.answer)}>Check the answer</Button>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <section className='flex space-x-4'>
      <div className='w-1/4 h-[608px] flex-col space-y-4 rounded-3xl bg-white sticky top-0 p-8'>
        <div>
          <Link href={`/course/${props.params.course}/${props.params.module}/${props.params.lesson}`} className='font-bold bg-gray-200 rounded-lg p-2'>Back to Lesson</Link>
        </div>
        <div>
          <Link href={exerciseContent?.attributes.slug} className='font-bold bg-gray-200 rounded-lg p-2'>Exercise</Link>
        </div>
        <ul className='flex-col space-y-4 p-2'>
          {toc.map((item, index) => (
            <li key={item.id} className={`toc-item ${activeId === item.id ? 'rounded-lg bg-yellow-300 font-bold p-4' : ''}`} data-id={item.id}>
              <a href={`#${item.id}`}>Question {index + 1}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-3/4 h-[608px] rounded-3xl bg-white hide-scrollbar lesson-content'>
        <div className="p-8 flex-col space-y-4">
          <h1>{exerciseContent?.attributes.Title}</h1>
          <div className="flex-col">
            {renderContent(exerciseContent?.attributes.Question.questions)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExerciseDetails;

