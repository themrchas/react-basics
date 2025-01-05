import PropTypes from 'prop-types';

export default function TypeCheck(props) {

    const styles = {

        name: {
            name: "font-family: Arial, Helvetica, sans-serif",
            
        },
        card: {
            backgroundColor: "hsl(0, 0%, 85%)", 
            color: "#2f2828",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "text",
            width: "30%",
            marginBottom: "20px"
        }
       
    }

    let users = props.users;

    console.log('props are',props);

    const listItems = users.map( user => 
     
       <li key={Math.random()} style={styles.card}>
        <span style={styles.name}>Name:&nbsp;</span>&nbsp;{user.name}<br/>
        Age: &nbsp;{user.age}<br/>
        Hobby: &nbsp;{user.hobby}
        </li>

        );
    console.log("listItems is",listItems)
    return (<ul>{listItems}</ul>)


};

//This is an example of using PropTypes with an array of objects
TypeCheck.propTypes = {
    users: PropTypes.arrayOf(
                            PropTypes.shape({name:PropTypes.string, 
                                            age:PropTypes.number, 
                                            hobby:PropTypes.string
                                            })
                            )
}

TypeCheck.defaultProps = {
    users:  []
}