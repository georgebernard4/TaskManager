function Todo({todo,index,toggle}){
  function handle(){
    console.log('Ping:',index);
    toggle(index);
  }
  let classNameX = "todo";
  if(todo.isCompleted) classNameX = "completed"
  return <div className={classNameX} onClick={handle} > {todo.text} </div>
}
