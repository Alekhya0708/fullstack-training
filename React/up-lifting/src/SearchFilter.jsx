import { Autocomplete, Container, List, ListItem, TextField } from "@mui/material";
import { useState } from "react"

const ParentSearchFilter=()=>{
    const [searchQuery, setSearchQuery]=useState("");
    const itemsList = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Mango", "Orange", "Peach", "Pineapple", "Strawberry",
    "Blueberry", "Raspberry", "Blackberry", "Watermelon", "Cantaloupe", "Honeydew", "Kiwi", "Lemon", "Lime", "Coconut",
    "Apricot", "Plum", "Pomegranate", "Fig", "Persimmon", "Guava", "Lychee", "Passionfruit", "Papaya", "Cranberry",
    "Mulberry", "Tangerine", "Nectarine", "Boysenberry", "Kumquat", "Gooseberry", "Elderberry", "Dragonfruit", "Starfruit",
    "Jackfruit", "Durian", "Carambola", "Sapodilla", "Jabuticaba", "Cherimoya", "Mangosteen", "Rambutan", "Salak", "Longan"];
    const handleSearch=(event)=>{
        setSearchQuery(event.target.value);
    }
    return(
        <Container>
            <h1>7. Search Filter for a List of Items</h1>
            <Autocomplete disablePortal options={itemsList} onInputChange={handleSearch}
            renderInput={(params) => 
                <TextField {...params} label="Search Items..." variant="outlined" margin="normal" />}
                />
            <ChildListItems itemsList={itemsList} searchQuery={searchQuery}/>
        </Container>
    )
}
const ChildListItems=({itemsList,searchQuery})=>{
    const filterItems= itemsList.filter((items)=>items.toLowerCase().includes(searchQuery.toLowerCase()))
    return(
        <div>
            <List>
                {filterItems.length>0 ? (filterItems.map((items,index)=><ListItem key={index}>{items}</ListItem>)
                                ) : (<ListItem style={{color:"gray"}}>No Items Found</ListItem>)}
            </List>
        </div>
    )
}
export default ParentSearchFilter;