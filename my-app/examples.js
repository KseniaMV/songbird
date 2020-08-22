/*class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
          // чтобы не перехватывать исключения из ошибок в самих компонентах.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
    {items.map(item => {
                        return<li key={item.name}>{item}</li>
    })}


let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});



fetch('/myFile.json')
  .then(response => {
    return response.json()
  }).then(data => {
    this.setState({ levels: data.levels });
  }).catch(ex => {
    console.log('parsing failed', ex)
  })

  
   return new Promise((resolve,reject)=>{
            let request = new XMLHttpRequest();
            request.open('post','../../birdsData.json');
            request.send();
            request.onload =function(){
                let birds = request.response;
                console.log(birds);
            }

            resolve();
          

        }).then((data)=>this.setState({
            isLoaded: true,
            items: data
        })
      
        )
  */


  ////////////88888888888888///////////

 /* const dataBirds = birdsData;
class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isRightAnswer: false,
            category: "Разминка",
            count: 0
        }
     }

     //получение текущей  категории вопроса
     setQuestionCategory =(categoryCount)=>{
        switch(categoryCount) {
            case 1: 
            this.setState({category: "Воробьиные"});
            break
            case 2: 
            this.setState({category: "Лесные"});
            break
            case 3: 
            this.setState({category: "Певчие птицы"});
            break 
            case 4: 
            this.setState({category: "Хищные птицы"});
            break 
            case 5: 
            this.setState({category: "Морские птицы"});
            break
            default: 
            this.setState({category: "Разминка"});
        }
       
     }

     //случайная птица из текущей категории для вопроса
     getCurrentBird = ()=>{
         let randomCount = Math.floor(Math.random() * 6);
         let category = this.getQuestionCategoryName();
         let currentBird = dataBirds[category][randomCount];
         let currentBirdData = {
             name: currentBird.name,
             audio: currentBird.audio,
             species: currentBird.species,
             image: currentBird.image,
             description: currentBird.description
         }
         return currentBirdData;
         
     }


  handleClick = (e)=>{
        let categoryCount = this.state.count;
        categoryCount ++;
        this.setQuestionCategory(categoryCount);
            this.setState(()=>{
                return{
                  count: categoryCount,
                  isRightAnswer: true
                }
            });  
            if(categoryCount === 5){
                this.setState(() => {
                    return {count:0}
                }); 
            } 
            console.log(this.state.category)
   
    }

    getQuestionCategoryName = () =>{
        let questionCategoryName = this.state.category;
        return questionCategoryName;    
    }

    getQuestionCategoryCount = () =>{
        let currentCategory = this.state.count;
        return currentCategory;
    } 

    getRightAnswer = () =>{
        let rightAnswer = this.state.isRightAnswer;
        console.log(rightAnswer)
        return rightAnswer;
    }  


  
    
    render(){
        const {isRightAnswer, category, count} = this.state;
        return (
                <div className="app">
                 <Header />
                 <Menu count={count}/>
                 <Questions currentBird={this.getCurrentBird()} isRightAnswer={isRightAnswer} category={category}/>
                 <Answers/>
                 <NextButton handleClick={this.handleClick}/>
                </div>
        )
    }
}
export default Game;*/