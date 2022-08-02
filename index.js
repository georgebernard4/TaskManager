function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const [taskCount, setTaskCount] = React.useState(0);

  const ToggleCompleted= (index) => {
    let todo = todos[index];
    let todoX = {...todo};
    let countChange = todo.isCompleted ? -1 : 1;
    setTaskCount(taskCount + countChange);
    todoX.isCompleted = !todo.isCompleted;
    let temp = [...todos];    
    temp.splice(index, 1, todoX);
    setTodos(temp);
  };

  const clearAllTodos = () =>{
    // let tempTodos = [...todos];
    // let completedCount = tempTodos.reduce(
    //   (sum, todo) => {
    //     if(todo.isCompleted) sum++;
    //   },
    //   0
    // );
    // setTaskCount( taskCount + completedCount);
    setTodos([]);
  }
  

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  const clearCompletedHandler = () => {
    console.log('clearCompletedHandler')
    let temp = [...todos]; 
    let answer = []; 
    let tempCount = taskCount;  
    for(let j=0; j < temp.length; j++){
      let todo = todos[j];
      if(!todo.isCompleted){
        answer.push(todo);
      }else{
        tempCount++
      }
    }
    setTodos(answer);
    setTaskCount(tempCount)
  }
  function FindIfNoTasks(){
    if(todos.length != 0) return;
    return <div id='noTasks' className='allDone' index={-1} key={-1}>All Tasks Done</div>;
  }

  function makeStarArray(){
    let answer = [];
    for( let k = 0; k < taskCount; k++){
      answer.push('star')
    }
  }

  
  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} toggle={ToggleCompleted}/>
          ))}
          <FindIfNoTasks></FindIfNoTasks>
          <div className='removeAll' key={500} index={500} onClick = {clearCompletedHandler}>Clear Completed Tasks</div>
          <div className='removeAll' key={501} index={501} onClick = {clearAllTodos}>Clear All Tasks</div>
          <div className='removeAll' key={502} index={502}>Task Completed: {taskCount}</div>
          {/* {todos.map((todo, i) => ( */}
          {/* <img src={require('star.png')}  alt="ImageStar" className= 'rewardBadge'/> */}
          {/* <Image src= 'star.png' className= 'rewardBadge'></Image> */}
          {/* ))} */}
        <TodoForm addTodo={addTodo} />
        
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
