import { Question, Quiz } from "../types";

const StarWars1Question: Question= {
    id: 1,
    title: "Who is Luke's father ?",
    type: "classic",
    variants: [
        {
            id: 'A',
            text: 'Obi Wan Kenobi'
        },
        {
            id: 'B',
            text: 'Anakin Skywalker'
        },
        {
            id: 'C',
            text: 'Django Fett'
        },
        {
            id: 'D',
            text: 'Jar Jar Binks'
        }
    ],
    answer: ['B','Anakin Skywalker'],
    isLast: false
}
const StarWars2Question: Question= {
    id: 2,
    title: "Who is Darth Vader's son ?",
    type: "classic",
    variants: [
        {
            id: 'A',
            text: 'Luke Skywalker'
        },
        {
            id: 'B',
            text: 'Anakin Skywalker'
        },
        {
            id: 'C',
            text: 'Han Solo'
        },
        {
            id: 'D',
            text: 'Jar Jar Binks'
        }
    ],
    answer: ['A','Luke Skywalker'],
    isLast: false
}
const StarWars3Question: Question= {
    id: 3,
    title: "Who is Darth Vader's master ?",
    type: "classic",
    variants: [
        {
            id: 'A',
            text: 'Luke Skywalker'
        },
        {
            id: 'B',
            text: 'Obi Wan Kenobi'
        },
        {
            id: 'C',
            text: 'Han Solo'
        },
        {
            id: 'D',
            text: 'Darth Sidius'
        }
    ],
    answer: ['D','Darth Sidius'],
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