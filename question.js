class Question{
    constructor()
   {
    this.input = createInput("name")
    this.button = createButton('play')
    this.greeting = createElement('h2')    
    
  }
   hide() {
     this.greeting.hide()
     this.button.hide()
     this.input.hide()

   }

  display(){
   this.title.html("myQuiz Game");
   this.title.position(350 , 0);

   this.question.html("Question :- what starts and ends with the letter'E' , but has only one letter");
    this.question.position(150,80);
    this.option1.html("1: Eveyone");
    this.option1.position(150,100);
   this.option2.html("2:Envelope");
   this.option2.position(150,120);

   this.input1.position(150,230);

   this.button.mousePressed(()=>{
   this.input.hide();
    this.button.hide();
  
  
   contestant.name = this.input.value();
        
   contestantCount+=1;
   contestant.index = contestantCount
   contestant.update(name)
   contestant.updateCount(contestantCount);
        
   
    });
   }
}