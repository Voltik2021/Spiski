import React, {PureComponent} from 'react';

class Form extends PureComponent {
    state = {  
        }
    onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);        
        let values = [...formData.values()]
        let newUser = {name:values[0], age:values[2], gender:values[1], id:this.props.listUser.length + 1}        
        this.props.addUser(newUser)
    }
    render() {        
        return (<form onSubmit={this.onSubmit}> 
                
                    <label>
                        Введите имя
                    <   input type = "text" name = "name"/>
                    </label>
                    <label>
                        Выберите пол
                        <select name = "gender">
                            <option value="male">Мужской</option>
                            <option value="female">Женский</option>
                        </select>
                    </label>
                    <label>
                        Введите возраст
                        <input type = "number" name = "age"/>
                    </label>
                    <button>отправить данные</button>
                </form>
        )
    }
}


export default Form