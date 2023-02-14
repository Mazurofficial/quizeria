import { Question, Quiz } from "../types";

const StarWars1Question: Question= {
    id: 1,
    title: "Who is Luke's father ?",
    type: "classic",
    variants: [
        {
            id: '1',
            text: 'Obi Wan Kenobi'
        },
        {
            id: '2',
            text: 'Anakin Skywalker'
        },
        {
            id: '3',
            text: 'Django Fett'
        },
        {
            id: '4',
            text: 'Jar Jar Binks'
        }
    ],
    answer: ['2','Anakin Skywalker'],
    isLast: false
}
const StarWars2Question: Question= {
    id: 2,
    title: "Who is Darth Vader's son ?",
    type: "classic",
    variants: [
        {
            id: '1',
            text: 'Luke Skywalker'
        },
        {
            id: '2',
            text: 'Anakin Skywalker'
        },
        {
            id: '3',
            text: 'Han Solo'
        },
        {
            id: '4',
            text: 'Jar Jar Binks'
        }
    ],
    answer: ['1','Luke Skywalker'],
    isLast: false
}
const StarWars3Question: Question= {
    id: 3,
    title: "Who is Darth Vader's master ?",
    type: "classic",
    variants: [
        {
            id: '1',
            text: 'Luke Skywalker'
        },
        {
            id: '2',
            text: 'Obi Wan Kenobi'
        },
        {
            id: '3',
            text: 'Han Solo'
        },
        {
            id: '4',
            text: 'Darth Sidius'
        }
    ],
    answer: ['4','Darth Sidius'],
    isLast: true
}

export const StarWarsQuiz : Quiz = {
    id: 1,
    title: 'Star Wars quiz',
    category: 'films',
    difficulty: 'medium',
    type:'classic',
    questions: [StarWars1Question, StarWars2Question, StarWars3Question],
    answers: [StarWars1Question.answer,StarWars2Question.answer,StarWars3Question.answer ]
}

export const quizes: Quiz[] = [StarWarsQuiz]