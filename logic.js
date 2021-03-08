/*
============================================
; Title:  Functions with parameters
; Author: Grayton Savickas, James Pinson, Jonathan Disla
; Date:   14 Jan 2021
; Modified By: 
; Description: This is the main JavaScript for our single page project
;===========================================
*/
Survey
    .StylesManager
    .applyTheme("bootstrap");
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
var finalScore = "";
var json = {
    title: "JavaScript Quiz",
    showProgressBar: "bottom",
    showPrevButton: true, 
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to begin the JavaScript Quiz. There are ten questions good luck!<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "expression",
                    title: "What is a JavaScript Expression?",
                    choices: [
                        "The code talking about it’s feelings",
                        "A phrase of JavaScript that can be evaluated to produce a value. ",
                        "A phrase of JavaScript that offers a solution",
                        "A formula used within JavaScript"
                    ],
                    correctAnswer: "A phrase of JavaScript that can be evaluated to produce a value. "
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "manipulate",
                    title: "What are two types that JavaScript programs can manipulate?'",
                    choicesOrder: "random",
                    choices: [
                        "Objects and Arrays",
                        "Arrays and Solutions",
                        "Solutions and Objects",
                        "Words and Designs"
                    ],
                    correctAnswer: "Objects and Arrays"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "comments",
                    title: "Which ones of these below is an acceptable style of JavaScript comments?",
                    choicesOrder: "random",
                    choices: [
                        "//", "/!", "**", "/;"
                    ],
                    correctAnswer: "//"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "reserved",
                    title: "Which of these is not a Reserved Word for JavaScript?",
                    choicesOrder: "random",
                    choices: [
                        "default", "new", "while", "before"
                    ],
                    correctAnswer: "before"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "date",
                    title: "What is a Date() constructor for?'",
                    choicesOrder: "random",
                    choices: [
                        "Giving you dating advice", 
                        "Creating objects that represent dates and times", 
                        "Creating a calendar", 
                        "Creating objects that show time and space"
                    ],
                    correctAnswer: "Creating objects that represent dates and times"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "invoke",
                    title: "Which of these is not a way JavaScript functions can be invoked?'",
                    choicesOrder: "random",
                    choices: [
                        "As functions", "As methods", "As constructors", "As strings"
                    ],
                    correctAnswer: "As strings"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "structural",
                    title: "Which is not a pattern that falls under the Structural Design Category?'",
                    choicesOrder: "random",
                    choices: [
                        "Façade", "Cascade", "Adapter", "Decorator"
                    ],
                    correctAnswer: "Cascade"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "behavioral",
                    title: "Behavioral Patterns focus on improving or streamlining ________?'",
                    choicesOrder: "random",
                    choices: [
                        "Structure", "Results", "Speed", "Communication "
                    ],
                    correctAnswer: "Communication "
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "patterns",
                    title: "Which is not one of the three main categories of Design Patterns?'",
                    choicesOrder: "random",
                    choices: [
                        "Inspirational", "Creational", "Behavioral", "Structural"
                    ],
                    correctAnswer: "Inspirational"
                }
            ]
        },{
            questions: [
                {
                    type: "radiogroup",
                    name: "single",
                    title: "Which pattern is known because traditionally is restricts instantiation of a class to a single object?'",
                    choicesOrder: "random",
                    choices: [
                        "Singleton Pattern", "Module Pattern ", "Observer Pattern", "Mediator Pattern "
                    ],
                    correctAnswer: "Singleton Pattern"
                }
            ]
        }
        
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
};
 
window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 10);
    });
 
  survey.render("surveyElement");


// Work in progress to us knockout to show scoring
//   function resultsModel(){
//     var self = this;

//     self.count = 0;

//     self.score = function(){
//         var totalScore = self.count();
//         if (totalScore > 7){
//             self.count ="You have learned so much!"
//         }
//         else if (totalScore > 5 && totalScore < 7){
//             self.count = "You have learned some!"
//         }
//         else (totalScore <= 5)
//             self.count = "You have a lot to learn"
//     }
//     self.score = ko.observable(count);
// }
// console.log(resultsModel.self.count)
// ko.applyBinding(new resultsModel(), resultsModel)
