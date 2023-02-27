import { QuestionType, QuizType } from "../types";

const StarWars1Question: QuestionType= {
    id: 1,
    img_url:'https://wallpaperaccess.com/full/714096.jpg',
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
const StarWars2Question: QuestionType= {
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
const StarWars3Question: QuestionType= {
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
const StarWars4Question: QuestionType= {
    id: 4,
    title: "Who is Anakin Skuwalker's padawan ?",
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
            text: 'Asoka Tano'
        },
        {
            id: 'D',
            text: 'Darth Maul'
        }
    ],
    answer: ['C','Asoka Tano'],
    isLast: true
}

export const StarWarsQuiz1 : QuizType = {
    id: '1',
    img: 'https://wallpaperaccess.com/full/714096.jpg',
    title: 'Star Wars quiz',
    description:'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    category: 'films',
    difficulty: 'medium',
    type:'classic',
    questions: [StarWars1Question, StarWars2Question, StarWars3Question],
    answers: [StarWars1Question.answer,StarWars2Question.answer,StarWars3Question.answer ]
}

export const StarWarsQuiz2 : QuizType = {
    id: '2',
    img: 'https://wallpaperaccess.com/full/714096.jpg',
    title: 'Star Wars quiz',
    description:'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    category: 'films',
    difficulty: 'medium',
    type:'classic',
    questions: [StarWars1Question, StarWars2Question, StarWars4Question],
    answers: [StarWars1Question.answer,StarWars2Question.answer,StarWars4Question.answer ]
}

export const StarWarsQuiz3 : QuizType = {
    id: '3',
    img: 'https://wallpaperaccess.com/full/714096.jpg',
    title: 'Star Wars quiz',
    description:'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
    category: 'films',
    difficulty: 'medium',
    type:'classic',
    questions: [StarWars1Question, StarWars2Question, StarWars3Question],
    answers: [StarWars1Question.answer,StarWars2Question.answer,StarWars3Question.answer ]
}

export const quizes: QuizType[] = [StarWarsQuiz1,StarWarsQuiz2,StarWarsQuiz3]