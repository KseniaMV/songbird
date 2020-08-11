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