class Quiz
{
   constructor(type, questions, results)
   {
       //Тип теста: 1 - 1 правильный ответ, 2 - несколько правильных ответов
       this.type = type;
       this.questions = questions;
       //Массив с возможными результатами
       this.results = results;
       this.score = 0;
       //Номер результата из массива
       this.result = 0;
       //Номер текущего вопроса
       this.current = 0;
   }
   //Логика

}

class Question
{
   constructor(text, answers)
   {
       this.text = text;
       this.answers = answers;
   }
   //Логика

}

class Answer
{
   constructor(text, value)
   {
       this.text = text;
       this.value = value;
   }
}
 
class Result
{
   constructor(text, value)
   {
       this.text = text;
       this.value = value;
   }
   //Логика

}

const questions =
[
   new Question("How many planets are in the solar system?",
   [
       new Answer("8", 1),
       new Answer("9", 0),
       new Answer("10", 0),
   ]),
   
   new Question("What is the freezing point of water?",
   [
       new Answer("0", 1),
       new Answer("-5", 0),
       new Answer("-6", 0),
   ]),

   new Question("What is the longest river in the world?",
   [
       new Answer("Nile", 1),
       new Answer("Amazon", 0),
       new Answer("Yangtze", 0),
   ]),

   new Question("How many chromosomes are in the human genome?",
   [
       new Answer("42", 0),
       new Answer("44", 0),
       new Answer("46", 1),
   ]),

   new Question("Which of these characters are friends with Harry Potter?",
   [
       new Answer("Ron Weasley", 1),
       new Answer("Draco Malfoy", 0),
       new Answer("Hermione Granger", 2),
   ]),

   new Question("What is the capital of Canada?",
   [
       new Answer("Toronto", 0),
       new Answer("Ottawa", 1),
       new Answer("Vancouver", 0),
   ]),
   
   new Question("What is the Jewish New Year called?",
   [
       new Answer("Hanukkah", 0),
       new Answer("Yom Kippur", 1),
       new Answer("Kwanzaa", 0),
   ]),
];
 