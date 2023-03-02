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
export const StarWarsQuiz : QuizType = {
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


const PSQuizQuestions: QuestionType[] = [
    {
      id: 1,
      img_url:'https://wallscloud.net/img/resize/1024/576/MM/2022-06-25-Playstation_Logo.jpg',
      title: "In which year was the PlayStation Studios brand officially introduced?",
      type: "classic",
      variants: [
        {
          id: "A",
          text: "2015",
        },
        {
          id: "B",
          text: "2016",
        },
        {
          id: "C",
          text: "2017",
        },
        {
          id: "D",
          text: "2018",
        },
      ],
      answer: ["B", "2016"],
      isLast: false,
    },
    {
      id: 2,
      img_url: "",
      title: "What is the name of the protagonist in the Uncharted series?",
      type: "classic",
      variants: [
        {
          id: "A",
          text: "Joel",
        },
        {
          id: "B",
          text: "Nathan",
        },
        {
          id: "C",
          text: "Ellie",
        },
        {
          id: "D",
          text: "Trevor",
        },
      ],
      answer: ["B", "Nathan"],
      isLast: false,
    },
    {
      id: 3,
      img_url: "",
      title: "What is the name of the protagonist in Horizon Zero Dawn?",
      type: "classic",
      variants: [
        {
          id: "A",
          text: "Aloy",
        },
        {
          id: "B",
          text: "Chloe",
        },
        {
          id: "C",
          text: "Sylens",
        },
        {
          id: "D",
          text: "Rost",
        },
      ],
      answer: ["A", "Aloy"],
      isLast: false,
    },
    {
      id: 4,
      img_url: "",
      title: "Which of the following games was not developed by Naughty Dog?",
      type: "classic",
      variants: [
        {
          id: "A",
          text: "The Last of Us",
        },
        {
          id: "B",
          text: "Crash Bandicoot",
        },
        {
          id: "C",
          text: "Jak and Daxter",
        },
        {
          id: "D",
          text: "Uncharted",
        },
      ],
      answer: ["B", "Crash Bandicoot"],
      isLast: false,
    },
    {
      id: 5,
      img_url: "",
      title: "What is the name of the company that created the Ratchet & Clank series?",
      type: "classic",
      variants: [
        {
          id: "A",
          text: "Naughty Dog",
        },
        {
          id: "B",
          text: "Insomniac Games",
        },
        {
          id: "C",
          text: "Sucker Punch Productions",
        },
        {
          id: "D",
          text: "Guerrilla Games",
        },
      ],
      answer: ["B", "Insomniac Games"],
      isLast: false,
    },
    {
        id: 6,
        img_url: "",
        title: "Which of the following games is set in the world of Norse mythology?",
        type: "classic",
        variants: [
          {
            id: "A",
            text: "God of War",
          },
          {
            id: "B",
            text: "Horizon Zero Dawn",
          },
          {
            id: "C",
            text: "Bloodborne",
          },
          {
            id: "D",
            text: "Death Stranding",
          },
        ],
        answer: ["A", "God of War"],
        isLast: false,
      },
      {
        id: 7,
        img_url: "",
        title: "What is the name of the iconic enemy in the Bloodborne series?",
        type: "classic",
        variants: [
          {
            id: "A",
            text: "Troll",
          },
          {
            id: "B",
            text: "Demon",
          },
          {
            id: "C",
            text: "Hunter",
          },
          {
            id: "D",
            text: "Beast",
          },
        ],
        answer: ["D", "Beast"],
        isLast: false,
      },
      {
        id: 8,
        img_url: "",
        title: "What is the name of the city in which Infamous Second Son takes place?",
        type: "classic",
        variants: [
          {
            id: "A",
            text: "New York",
          },
          {
            id: "B",
            text: "Seattle",
          },
          {
            id: "C",
            text: "Chicago",
          },
          {
            id: "D",
            text: "San Francisco",
          },
        ],
        answer: ["B", "Seattle"],
        isLast: false,
      },
      {
        id: 9,
        img_url: "",
        title: "What is the name of the character voiced by Ashley Johnson in The Last of Us series?",
        type: "classic",
        variants: [
          {
            id: "A",
            text: "Ellie",
          },
          {
            id: "B",
            text: "Tess",
          },
          {
            id: "C",
            text: "Marlene",
          },
          {
            id: "D",
            text: "Sarah",
          },
        ],
        answer: ["A", "Ellie"],
        isLast: false,
      },
      {
        id: 10,
        img_url: "",
        title: "What is the name of the organization that opposes the Fireflies in The Last of Us?",
        type: "classic",
        variants: [
          {
            id: "A",
            text: "Hunters",
          },
          {
            id: "B",
            text: "Rattlers",
          },
          {
            id: "C",
            text: "Scavengers",
          },
          {
            id: "D",
            text: "Seraphites",
          },
        ],
        answer: ["A", "Hunters"],
        isLast: false,
      },
      {
        id: 11,
        img_url: "",
        title: "What is the name of the studio behind the game Ghost of Tsushima?",
        type: "classic",
        variants: [
          {
            id: "A",
            text: "Sucker Punch Productions",
          },
          {
            id: "B",
            text: "Insomniac Games",
          },
          {
            id: "C",
            text: "Guerrilla Games",
          },
          {
            id: "D",
            text: "Naughty Dog",
          },
        ],
        answer: ["A", "Sucker Punch Productions"],
        isLast: false,
      },
      {
        id: 12,
        img_url: "",
        title: "Which of the following games features a protagonist who can control time?",
        type: "classic",
        variants: [
          {
            id: "A",
            text: "Horizon Zero Dawn",
          },
          {
            id: "B",
            text: "Uncharted 4: A Thief's End",
          },
          {
            id: "C",
            text: "Bloodborne",
          },
          {
            id: "D",
            text: "Gravity Rush 2",
          },
        ],
        answer: ["D", "Gravity Rush 2"],
        isLast: false,
      },
      {
        id: 13,
        img_url: "",
        title: "What is the name of the popular racing game series developed by Polyphony Digital?",
        type: "classic",
        variants: [
          {
            id: "A",
            text: "Need for Speed",
          },
          {
            id: "B",
            text: "Forza Motorsport",
          },
          {
            id: "C",
            text: "Gran Turismo",
          },
          {
            id: "D",
            text: "Midnight Club",
          },
        ],
        answer: ["C", "Gran Turismo"],
        isLast: false,
      },
      {
        id: 14,
        img_url: "",
        title: "What is the name of the character voiced by Yuri Lowenthal in the Spider-Man game series?",
        type: "classic",
        variants: [
          {
            id: "A",
            text: "Miles Morales",
          },
          {
            id: "B",
            text: "Peter Parker",
          },
          {
            id: "C",
            text: "Harry Osborn",
          },
          {
            id: "D",
            text: "Eddie Brock",
          },
        ],
        answer: ["B", "Peter Parker"],
        isLast: false,
      },
      {
        id: 15,
        img_url: "",
        title: "What is the name of the studio behind the game Ratchet & Clank?",
        type: "classic",
        variants: [
          {
            id: "A",
            text: "Sucker Punch Productions",
          },
          {
            id: "B",
            text: "Insomniac Games",
          },
          {
            id: "C",
            text: "Naughty Dog",
          },
          {
            id: "D",
            text: "Guerrilla Games",
          },
        ],
        answer: ["B", "Insomniac Games"],
        isLast: true
      }
    
    
    
]

const PSQuizAnswers: QuizType['answers'] = [
    ["B", "2016"],
    ["B", "Nathan"],
    ["A", "Aloy"],
    ["B", "Crash Bandicoot"],
    ["B", "Insomniac Games"],
    ["A", "God of War"],
    ["D", "Beast"],
    ["B", "Seattle"],
    ["A", "Ellie"],
    ["A", "Hunters"],
    ["A", "Sucker Punch Productions"],
    ["D", "Gravity Rush 2"],
    ["C", "Gran Turismo"],
    ["B", "Peter Parker"],
    ["B", "Insomniac Games"]
]

export const PlayStationQuiz : QuizType = {
        id: '2',
        img: 'https://wallscloud.net/img/resize/1024/576/MM/2022-06-25-Playstation_Logo.jpg',
        title: 'PlayStation Quiz',
        description:'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        category: 'games',
        difficulty: 'hard',
        type:'classic',
        questions: PSQuizQuestions,
        answers: PSQuizAnswers
}


const Pixar1Question: QuestionType = {
    id: 1,
    img_url: '',
    title: "In 'Toy Story', what is the name of the boy who owns Woody and Buzz Lightyear?",
    type: "classic",
    variants: [
    {
    id: 'A',
    text: 'Andy'
    },
    {
    id: 'B',
    text: 'Sid'
    },
    {
    id: 'C',
    text: 'Billy'
    },
    {
    id: 'D',
    text: 'Tommy'
    }
    ],
    answer: ['A', 'Andy'],
    isLast: false
}    
const Pixar2Question: QuestionType = {
    id: 2,
    img_url: '',
    title: "What is the name of the main character in Pixar's 'Soul'?",
    type: "classic",
    variants: [
    {
    id: 'A',
    text: 'Joe'
    },
    {
    id: 'B',
    text: 'Sully'
    },
    {
    id: 'C',
    text: 'Buzz'
    },
    {
    id: 'D',
    text: 'Woody'
    }
    ],
    answer: ['A', 'Joe'],
    isLast: false
}    
const Pixar3Question: QuestionType = {
    id: 3,
    img_url: '',
    title: "What is the name of the red race car in Pixar's 'Cars'?",
    type: "classic",
    variants: [
    {
    id: 'A',
    text: 'Mater'
    },
    {
    id: 'B',
    text: 'Lightning McQueen'
    },
    {
    id: 'C',
    text: 'Sally'
    },
    {
    id: 'D',
    text: 'Doc Hudson'
    }
    ],
    answer: ['B', 'Lightning McQueen'],
    isLast: false
}    
const Pixar4Question: QuestionType = {
    id: 4,
    img_url: '',
    title: "What is the name of the family in Pixar's 'The Incredibles'?",
    type: "classic",
    variants: [
    {
    id: 'A',
    text: 'The Parrs'
    },
    {
    id: 'B',
    text: 'The Incredibles'
    },
    {
    id: 'C',
    text: 'The Supers'
    },
    {
    id: 'D',
    text: 'The Heroes'
    }
    ],
    answer: ['A', 'The Parrs'],
    isLast: false
}
const Pixar5Question: QuestionType= {
        id: 5,
        img_url:'',
        title: "What is the name of the villain in the movie 'The Incredibles'?",
        type: "classic",
        variants: [
        {
        id: 'A',
        text: 'Syndrome'
        },
        {
        id: 'B',
        text: 'Dr. Evil'
        },
        {
        id: 'C',
        text: 'MegaMind'
        },
        {
        id: 'D',
        text: 'The Joker'
        }
        ],
        answer: ['A','Syndrome'],
        isLast: true
}

export const PixarQuiz : QuizType = {
    id: '3',
    img: 'https://wallpaperaccess.com/full/1098783.jpg',
    title: 'Pixar Movies Quiz',
    description:'Test your knowledge on some of the most beloved Pixar movies!',
    category: 'films',
    difficulty: 'easy',
    type:'classic',
    questions: [Pixar1Question, Pixar2Question, Pixar3Question, Pixar4Question, Pixar5Question],
    answers: [Pixar1Question.answer, Pixar2Question.answer, Pixar3Question.answer, Pixar4Question.answer, Pixar5Question.answer]
}


const Disney1Question: QuestionType= {
    id: 1,
    img_url: 'https://i.insider.com/5c11046aa9054804ed7ff4c3?width=1300&format=jpeg&auto=webp',
    title: "In Disney's 101 Dalmatians, who is the villain trying to turn the puppies into coats?",
    type: "classic",
    variants: [
        {
            id: 'A',
            text: 'Cruella de Vil'
        },
        {
            id: 'B',
            text: 'Ursula'
        },
        {
            id: 'C',
            text: 'Jafar'
        },
        {
            id: 'D',
            text: 'Scar'
        }
    ],
    answer: ['A', 'Cruella de Vil'],
    isLast: false
};

const Disney2Question: QuestionType= {
    id: 2,
    img_url: 'https://www.infobae.com/new-resizer/N-EU6H5aHJXl9osjc4X0Dsa0TH4=/1440x810/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/JQ45OQSRLFCW7D6F6AGRAOUZRY.jpg',
    title: "What kind of fish is Nemo in Disney's Finding Nemo?",
    type: "classic",
    variants: [
        {
            id: 'A',
            text: 'Clownfish'
        },
        {
            id: 'B',
            text: 'Angelfish'
        },
        {
            id: 'C',
            text: 'Guppy'
        },
        {
            id: 'D',
            text: 'Pufferfish'
        }
    ],
    answer: ['A', 'Clownfish'],
    isLast: false
};

const Disney3Question: QuestionType= {
    id: 3,
    img_url: 'https://media.cnn.com/api/v1/images/stellar/prod/221123180311-aladdin-1992.jpg?c=16x9&q=h_720,w_1280,c_fill',
    title: "In Disney's Aladdin, what is the name of Jasmine's pet tiger?",
    type: "classic",
    variants: [
        {
            id: 'A',
            text: 'Rajah'
        },
        {
            id: 'B',
            text: 'Simba'
        },
        {
            id: 'C',
            text: 'Pascal'
        },
        {
            id: 'D',
            text: 'Meeko'
        }
    ],
    answer: ['A', 'Rajah'],
    isLast: false
};

const Disney4Question: QuestionType= {
    id: 4,
    img_url: 'https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/06/11/USATODAY/usatsports/promo322339620-e1507084189552.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp',
    title: "In Disney's Moana, what is the name of the demigod who joins Moana on her journey?",
    type: "classic",
    variants: [
        {
            id: 'A',
            text: 'Maui'
        },
        {
            id: 'B',
            text: 'Hercules'
        },
        {
            id: 'C',
            text: 'Zeus'
        },
        {
            id: 'D',
            text: 'Perseus'
        }
    ],
    answer: ['A', 'Maui'],
    isLast: true
};

const DisneyQuiz: QuizType = {
    id: '4',
    img: 'https://i0.wp.com/thinkmonsters.com/speakinghuman/media/wp-content/uploads/Disney-Updated-Movie-Logo-2011.png?fit=2880%2C1514&ssl=1',
    title: "Disney Films Quiz",
    description: "Test your knowledge on classic Disney films!",
    questions: [Disney1Question, Disney2Question, Disney3Question, Disney4Question],
    difficulty: 'easy',
    category: 'films',
    type: 'classic',
    answers: [Disney1Question.answer,Disney2Question.answer,Disney3Question.answer,Disney4Question.answer]
};


export const quizes: QuizType[] = [StarWarsQuiz,PlayStationQuiz, PixarQuiz,DisneyQuiz]

