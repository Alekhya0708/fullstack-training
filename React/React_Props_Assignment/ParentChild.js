import './App.css'
const ChildComponet=({name})=>{
    return(
        <h2>Hello, {name}!</h2>
    );
}

const ParentComponet=()=>{
    const name = "Alice";
    return(
        <div className="container">
            <h2>3. Passing Props from Parent to Child</h2>
            <ChildComponet name={name} />
        </div>
    );
}

export default ParentComponet;