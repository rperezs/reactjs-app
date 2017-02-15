import React from 'react';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      data:[
        {
          "id": "1",
          "name" : "Ricardo",
          "lastName":"Perez"
        },
        {
          "id": "2",
          "name" : "Jason",
          "lastName":"Zumbado"
        },
        {
          "id": "3",
          "name" : "Andres",
          "lastName":"Blanco"
        },
        {
          "id": "4",
          "name" : "Alberto",
          "lastName":"Blanco"
        }
      ]
    }

    this.setStateHandler = this.setStateHandler.bind(this);
    this.updateList = this.updateList.bind(this);
  };

  setStateHandler(){

    var inputField = document.getElementById('userNameField')

    var userName = inputField.value;
    var users = this.state.data;
    var newUser = {}

    if(users.length > 0) {
      newUser.id = users[users.length - 1].id + 1;
    } else {
      newUser.id = 1;
    }


    var splittedName = userName.split(' ');
    newUser.name = splittedName[0];
    newUser.lastName = splittedName[1];

    users.push(newUser);
    console.log (users)

    this.setState({data : users});
  };

  updateList(e){
      var id = e.target.id;
      var users = this.state.data;

       var index = -1;

       for(var i =0; i < users.length; i++) {
           if(users[i].id.toString() === id.toString()){
           index = i;
           break;
         }
       }

      if(index >= 0) {
        users.splice(index,1);
      }

      this.setState({data : users});

    };

   render() {

      return (
         <div>
            <h1>Hello React-World!!</h1>
            <input id="userNameField" type="text"></input> <button onClick={this.setStateHandler}>+</button>
            <h2>React Users List</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((user,i) => <User key={i} index={i} data={user} updateFuncProp={this.updateList}/>)}
                </tbody>
              </table>
         </div>

      );
   }
}

class Button extends React.Component {
  render(){

   var buttonStyle = {
      backgroundColor: '#b12315',
      border: 'none',
      color: 'white',
      padding: '15 32',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: 16
    }

    return (
      <button id={this.props.data} onClick={this.props.updateFuncProp} style={buttonStyle}>
        Delete!
      </button>
    );
  }
}

class User extends React.Component {
  renderButton(id) {
    return <Button data={id} updateFuncProp={this.props.updateFuncProp}/>;
  }

  render(){
    return (
          <tr>
            <td id={this.props.index}> {this.props.data.id} </td>
            <td>{this.props.data.name} {this.props.data.lastName}</td>
            <td>{this.renderButton(this.props.data.id)}</td>
          </tr>
    );
  }
}

export default App;
