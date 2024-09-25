

const Tweet = (props) =>{
   return <div class = "tweet"><span class = 'username'>{props.username}</span><span class = 'name'>{props.name}</span>
   <span class = 'date'>{props.date}</span><div><p class = 'message'>{props.message}</p></div></div>
    
}

const App = () =>{
    return <div>
        <Tweet username = "Ionsta" name = "Brandon" date = "9/14" message = "Hi this is my first message" />
        <Tweet username = "Bootermin" name = "Nick" date = "9/16" message = "Hi How is everyone?"/>
        <Tweet username = "Mimiru" name = "Mim" date = "9/24" message = "Hi this is mim"/>
    </div>
}

ReactDOM.render(<App/>,
  document.getElementById("root"));