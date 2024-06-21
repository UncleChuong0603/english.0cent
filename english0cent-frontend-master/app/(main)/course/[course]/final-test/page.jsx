"use client";

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import fetchFinalTest from '@/helpers/fetchFinalTest';

const FinalTestDetails = (props) => {
  const [finalTestContent, setFinalTestContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState({});

  useEffect(() => {
    const fetchFinalTestData = async () => {
      try {
        const finalTestData = await fetchFinalTest(`filters[slug][$eq]=${props.params.course}-final-test`);
        if (finalTestData.data.length === 0) {
          setError('Final test not found');
        } else {
          const { Title, Question } = finalTestData.data[0].attributes;
          const { questions } = Question;
          setFinalTestContent({
            attributes: {
              Title,
              Question: {
                questions
              }
            }
          });

          const headings = questions.map((item, index) => ({
            id: `question-${index}`,
            text: item.question,
            level: 2
          }));
          setToc(headings);
        }
      } catch (err) {
        setError('Error fetching final test data');
      } finally {
        setLoading(false);
      }
    };

    fetchFinalTestData();
  }, [props.params.course]);

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

  const handleSubmit = () => {
    const questions = finalTestContent.attributes.Question.questions;
    let correctCount = 0;
    const correctAnswersMap = {};

    questions.forEach((question, index) => {
      const correctAnswer = question.answer;
      correctAnswersMap[index] = answers[index] === correctAnswer;
      if (answers[index] === correctAnswer) {
        correctCount++;
      }
    });

    setScore((correctCount / questions.length) * 100);
    setCorrectAnswers(correctAnswersMap);
    setSubmitted(true);
  };

  if (loading) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>Loading...</div>;
  if (error) return <div className='w-full h-[608px] bg-white rounded-3xl flex-center'>{error}</div>;

  const renderContent = (questions) => {
    return questions.map((item, index) => {
      const questionId = `question-${index}`;
      const selectedAnswer = answers[index];
      const isSubmitted = submitted;
      const isCorrect = correctAnswers[index];

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
        <div key={index} id={questionId} className={`mt-12 flex-col space-y-4 ${activeId === questionId ? 'rounded-lg bg-yellow-300 font-bold p-4' : ''}`}>
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
        </div>
      );
    });
  };

  return (
    <section className='flex space-x-4'>
      <div className='w-1/4 h-[608px] flex-col space-y-4 rounded-3xl bg-white sticky top-0 p-8'>
        <div className='flex-between'>
          <div className='font-bold bg-gray-200 rounded-lg p-2'>Final Test</div>
          <div>
            <Link href={`/course/${props.params.course}`} className='border border-gray-200 rounded-lg p-2'>Back to Lesson</Link>
          </div>
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
          <div className='flex-between'>
            <h1>{finalTestContent?.attributes.Title}</h1>
            {submitted && <div className='font-bold bg-gray-200 rounded-lg p-2'>Score: {score}</div>}
          </div>
          <div className="flex-col">
            {renderContent(finalTestContent?.attributes.Question.questions)}
          </div>
          {!submitted && (
            <div className='mt-4 flex-center'>
              <Button onClick={handleSubmit} disabled={Object.keys(answers).length !== finalTestContent.attributes.Question.questions.length}>
                Submit Test
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalTestDetails;
