class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
this.input2 = createInput("Enter Correct Option No.")


    this.button = createButton('Submit');
    //Create elements for One questi on (h3) and 4 options (h4)
this.Question = createElement('h3');
this.Option1 = createElement('h4');
this.Option2= createElement('h4');
this.Option3= createElement('h4');
this.Option4 = createElement('h4');



    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.

this.Question.html("Question :- Which crop is sown on the largest area in India")
this.Question.position(150,80);

this.Option1.html("A: Wheat");
this.Option1.position(150,100);

this.Option2.html("B: Rice");
this.Option2.position(150,120);

this.Option3.html("C: Sugarcane");
this.Option3.position(150,140);

this.Option4.html("D: Maize");
this.Option4.position(150,160);

    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You , Your Answer Has Been Submited");
      this.message.position(150,350)

    })


  }
}
