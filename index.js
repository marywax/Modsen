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
