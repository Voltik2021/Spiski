import React, {PureComponent} from 'react';

class List extends PureComponent {
    state = {  
        }

        
    render() {       
        // console.log(this.props)
        let {name, age, gender, id} = this.props
        console.log(id)
        return (
            <>
                <ul>
                    <li>Имя:{name} возраст:{age} пол:{gender}</li>
                </ul>
                <button onClick = {() => this.props.deleteUser(id)}>Удалить пользователя</button>
            </>
        )
    }
}


export default List