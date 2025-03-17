import './App.css'

export const usersObj = [
    { id: 1, name: "Alekhya", email: "alekhya0987@gmail.com" },
    { id: 2, name: "John", email: "john3097@gmail.com" },
    { id: 3, name: "Bob", email: "bobabcd890@gmail.com" }
  ];

const UserList =({usersObj=[]})=>{
    return(
        <div className='container'>
            <h2>6. Passing Props for Dynamic Content Rendering</h2>
            <h2>User List:</h2>
            
        {usersObj.map((user) => (
          <User key={user.id} name={user.name} email={user.email} />
        ))}
        </div>
    );
}
const User =({name,email})=>{
    return(
        <div className='container'>
            <h3>Name : {name}</h3>
            <h3>email: {email}</h3>
        </div>
    );
}

export default UserList;