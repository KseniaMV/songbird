import React from 'react';
import './AnswerList.css';
import AnswersItem from './AnswersItem';

class AnswerList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answerList: this.props.name,
            variants: [] 
        }
    }
   componentDidMount(){
        console.log(this.state.answerList)
        let answerItem = this.state.answerList.map((key, name)=>{
           return(
               <AnswersItem name={name}/>
           )
        })
        console.log(answerItem)
     
    }
 
    render(answerItem){
        return (
            <form className="answer-list">
                {answerItem}
 
            </form>
        )

    }
}

export default AnswerList;


/*this.items = this.state.cart.map((item, key) =>
   
{item.name}

  const articleElements = articles.map(article =>
      <li><Article article = {article}/></li>
     )

);*/