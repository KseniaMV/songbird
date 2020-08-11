import React from 'react';
import './Questions.css';
import BirdInfo from './BirdInfo.js';



class Questions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount(){
        return new Promise((resolve,reject)=>{
            let request = new XMLHttpRequest();
            request.open('GET', './birdsData.js');
            request.send();
            let birds = request.responseText;
            resolve(birds);
            console.log(birds);

        }).then((data)=>this.setState({
            isLoaded: true,
            items: data
        })
      
        )
    
        
        /*fetch("http://localhost:3000/api/", {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json', charset: 'utf-8'
            }
        })
        .then(response => response.json())
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) =>{
                this.setState({
                    isLoaded: true,
                    error
                })
            }
            
        );*/
    }
    render(){
        const {error, isLoaded, items} = this.state;
            if(error){
                return<div>Error</div>
            }
            else if(isLoaded){
                return<div>Loading...</div>
            }else{
                console.log({items})
                return(
                <div className="questions-conteiner">
                    <BirdInfo/>
                </div>
                )
            }
    }
}

export default Questions;