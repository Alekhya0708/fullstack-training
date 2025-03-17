import './App.js'

const Greeting=({name})=>{
    return (
        <div><h2>Hello, {name ? name : "Guest"}!</h2>
        </div>
        )
}
const ParentComponetOfGreeting=()=>{
    return (
        <div className='container'>
            <h2>7. Conditional Rendering with Props</h2>
            <Greeting name="Alekhya" />
            <Greeting />
        </div>
    );
}
export default ParentComponetOfGreeting;