import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters';
import Solution from './components/Solution';
import Score from './components/Score';

export class App extends Component {
  constructor(){
    super();
    this.state={
      letterStatus:this.generateLetterStatuses(),
      solution:"MARRK",
      guessWord:[],
      score: 100,
      hintFlag:true,
    }
    this.getHint=this.getHint.bind(this);
    this.clickChar=this.clickChar.bind(this);
    this.state.guessWord=this.initWithUnderScore();
  }

  initWithUnderScore(){
    let word=this.state.solution;
    let UnderScoreLetterArr=new Array(word.length);
    for(let i=0;i<word.length;i++){
      UnderScoreLetterArr[i]='_';
    }
    return UnderScoreLetterArr;
  }
  generateLetterStatuses(){
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }
  getHint(){
    if(this.state.hintFlag){
      let index = this.state.guessWord.findIndex(letter=>letter=='_');
      this.state.guessWord[index] = this.state.solution[index];
      this.setState({guessWord: this.state.guessWord})
      this.state.hintFlag=false;
      this.state.letterStatus[this.state.solution[index]]=true;
      this.setState({letterStatus:this.state.letterStatus})
    }

  }
  
  updatRightWord(letter){
      if(this.state.solution.includes(letter)){
        let index=-1;
        while(true){
           index = this.state.solution.indexOf(letter,index+1);
          if(index!==-1){
            this.state.guessWord[index]=letter;
          }
          else{break;}
        }
        return true;
      }
      return false;
  }
  clickChar(event){
      this.state.letterStatus[event.currentTarget.textContent]=true;
      this.setState({letterStatus:this.state.letterStatus})
      if(this.updatRightWord(event.currentTarget.textContent)){
         this.setState({score:this.state.score+5})
      }
      else{
        this.setState({score:this.state.score-20})
      }
      if(this.state.score<0){
        this.setState({score:0})
      }
  }


  render() {

    return (
      <div className="app">   
          <div >
              <Score score={this.state.score} />  
          </div>     
          <div >
               <Letters  letterStatus={this.state.letterStatus} word={this.state.guessWord} />
          </div>          
          <span><button id='hint' onClick={this.getHint.bind(this)}>Hint</button></span>
          <div>
              <Solution  clickChar={this.clickChar.bind(this)} letterStatus={this.state.letterStatus} solution={this.state.solution} />
          </div>
          <div className='finish'>
                {this.state.guessWord.includes('_') ? this.state.score<=0? "you loss the game ":"playing ....":" Conguration you win !!!"}
          </div>
      </div>
    )
  }
}



export default App;
