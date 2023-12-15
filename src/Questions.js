// Question Types
// 1. MCQs | Multiple Choice | single
import imgage from "./Pages/assets/QuestionIMG.png"

export const quiz = {
    topic: 'Javascript',
    totalQuestions: 3,
    maxPoints: 11,
    questions: [
      {
        question:
          'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'stringify()',
        perQuestionScore: 1,
      },
      //9 points max, depending on answer asign point from 1-9 
      // {
      //   question:
      //     'Pick your favorite color',
      //   choices: ['gray', 'blue', 'green', 'red', 'yellow', 'brown', 'black', 'pink', 'cyan'],
      //   type: 'MPQ',
      // },
    //if question doesn`t have img don`t render img box
      {
        imgSrc : imgage,
        question: 'Choose the correct figure from the four numbered ones.',
        choices: ['1', '2', '3', '4'],
        type: 'MCQsIMG',
        correctAnswer: '1',
        perQuestionScore: 1,
      },
    ],
  }