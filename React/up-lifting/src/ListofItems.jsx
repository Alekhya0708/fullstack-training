import { Button, List, ListItem, Stack } from "@mui/material"
import { useState } from "react";

const HeaderChild1=()=>{
    return(
        <div>
            <h1>List of Items</h1>
        </div>
    )
}
const ListChild2=({items,startPoint})=>{
    return(
        <List>
            {items.slice(startPoint,startPoint+5).map((item,index)=>(
                <ListItem key={index}>{item}</ListItem>
            ))}
        </List>
    )
}
const ButtonsChild3=({handlePrevious, handleNext})=>{
    return(
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handlePrevious}>Previous</Button>
      <Button variant="contained" onClick={handleNext}>Next</Button>
    </Stack>
    )
}
const ParentList=()=>{
    const listItems=["Item1","Item2","Item3","Item4","Item5","Item6","Item7","Item8","Item9","Item10","Item11","Item12"];
    const [start,setStart]=useState(0);
    const handlePrevious=()=>{
        setStart((start-5>=0)?start-5:start);
    }
    const handleNext=()=>{
        setStart((start+5< listItems.length)?start+5:start)
    }
    return(
        <div>
            <HeaderChild1 />
            <ListChild2 items={listItems} startPoint={start}/>
            <ButtonsChild3  handlePrevious={handlePrevious} handleNext={handleNext}/>
        </div>
    )
}
export default ParentList;
