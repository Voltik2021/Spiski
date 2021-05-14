import React, {PureComponent} from 'react'
import Form from './Form'
import List from './List'



class Main extends PureComponent {
    state = {
        listUser: [
            {name:'Zahar', age:33, gender:'Male', id:1},
            {name:'Vadim', age:33, gender:'Male', id:2},
            {name:'Aleksei', age:33, gender:'Male', id:3},
            {name:'Petrovich', age:33, gender:'female', id:4},
            {name:'Ilia', age:33, gender:'Male', id:5},
            {name:'Badir', age:33, gender:'Male', id:6},
            {name:'Artur', age:33, gender:'Male', id:7},
            {name:'Artim', age:33, gender:'Male', id:8}
        ],     

        flagGender: true,
        valueInput: '',
    }
    deleteUser = (id) => {
        let {listUser} = this.state;        
        let newArr = listUser.filter((item) => item.id !== id)
        this.setState({listUser:newArr})
    }
    addUser = (newUser) => {       
        const newListUser = [...this.state.listUser]
        newListUser.push(newUser)
        this.setState({listUser:newListUser})
    }
    sortGender = () => {
        const newArr = [...this.state.listUser]
        console.log(newArr)
        newArr.sort((a,b) => {  
            a = a.gender
            b = b.gender          
            if (a < b) {
                return this.state.flagGender === true?-1:1;
              }
              if (a > b) {
                return this.state.flagGender === true?1:-1;
              }            
              return 0;
        });

        this.setState({listUser:newArr, flagGender:this.state.flagGender?false:true})
    }

    searchByName = (e) => {
      this.setState({valueInput:e.target.value})
    }

    render() {
       const {listUser} = this.state
        return (
            <>
                <Form listUser = {listUser} addUser = {this.addUser}/>
                <input type = 'text' onChange = {this.searchByName}/>
                <button onClick = {this.sortGender}> сортировать по полу</button>
                {listUser.filter((item) =>item.name.includes(this.state.valueInput)).map((item) => <List key = {item.id} {...item} deleteUser = {this.deleteUser}/>)}              
            </>
        )
    }
}
export default Main