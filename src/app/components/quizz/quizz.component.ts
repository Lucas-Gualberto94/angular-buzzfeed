import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import quizz_questions from "../../../assets/data/quizz_questions.json"


@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent implements OnInit {
title:string = ""

questions:any
questionSelected:any

answers:string[] = []
answerSelected:any = {}

questionIndex:number = 0
questionMaxIndex:number = 0

finished:boolean = false


constructor () { }

ngOnInit(): void {
  if(quizz_questions){
    this.finished = false
    this.title = quizz_questions.title

    this.questions = quizz_questions.questions
    this.questionSelected = this.questions[this.questionIndex]

    this.questionIndex = 0
    this.questionMaxIndex = this.questions.length
  }
}

PlayerChoose(value:string){
  this.answers.push(value)
  this.nextStep()
}

async nextStep(){
  this.questionIndex+=1

  if(this.questionMaxIndex > this.questionIndex){
    this.questionSelected = this.questions[this.questionIndex]
  }else{
    const finalAnswer:string = await this.checkResult(this.answers)
    console.log (finalAnswer)
    this.finished = true


    this.answerSelected = quizz_questions.results.find(result => result.character === finalAnswer) || {};

    console.log("Selected Answer:", this.answerSelected);
  }
}

async checkResult(answers:string[]){

  const counts = answers.reduce((acc, answer) => {
    acc[answer] = (acc[answer] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });

  let result = Object.keys(counts)[0]; // Define um valor padrão, pode ser o primeiro personagem.



  for (const character in counts) {
    if (counts[character] >= counts[result]) {
      result = character;
    }
  }
  return result;

}



}
