import { Button, Card, CardContent, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useState } from "react";

const ParentToDo=()=>{
    const [toDoList,setToDoList] = useState([]);
    const [newToDo,setNewToDo]=useState();
    const addToDo = (todo)=>{
        setToDoList([...toDoList,todo]);
    }
    return(
        <div>
            <h1>3. Todo List with Parent-Child Communication</h1>
            <ChildToDo toDoList={toDoList}
                       newToDo={newToDo}
                       setNewToDo={setNewToDo}
                       addToDo={addToDo}/>
        </div>
    )
}
const ChildToDo=({toDoList,newToDo,setNewToDo,addToDo})=>{
    const handleChange=(eventChange)=>{
        setNewToDo(eventChange.target.value);
    }
    const handleAdd=()=>{
        if(newToDo.trim()){
            addToDo(newToDo);
            setNewToDo('');
        }
    }
    return(
        <div>
            <Card>
                <CardContent>
                    <TextField label="Add a new todo" variant="outlined" value={newToDo} onChange={handleChange} />
                    <br />
                    <Button variant="contained" color="primary" onClick={handleAdd} sx={{ marginTop: 2 }}>Add Todo</Button>
                    <List sx={{ marginTop: 2 }}>
                        {toDoList.map((todo,index)=>(<ListItem key={index}>
                            <ListItemText primary={todo}/>
                        </ListItem>))}
                    </List>
                </CardContent>
            </Card>
        </div>
    )
}
export default ParentToDo;