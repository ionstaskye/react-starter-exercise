const Person = (props) =>{
    return <div><p>Learn some information about this person</p>
    <h3>{props.name.length >= 8 ? props.name.substring(0, 6) : props.name} </h3>
    <h3>{props.age >= 18 ? "please go vote!" : "you must be 18"}</h3>
        <ul>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>
}

const App = () => {
    return <div><Person name = "Brandon" age = {36} hobbies = {["gaming", "walking", "dancing" ]} />
    <Person name = "Joey" age = {15} hobbies = {["dueling", "gambling", "fighting" ]} />
    <Person name = "Frieren" age = {85} hobbies = {["magic", "traveling", "learning spells" ]} />
    </div>
}

ReactDOM.render(<App/>,
  document.getElementById("root"));