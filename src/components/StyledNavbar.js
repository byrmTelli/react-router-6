import { NavLink } from "react-router-dom"



const Navbar = () => {
  return (
    <nav className="navbar">
        <NavLink to='/' style={({isActive})=>{
          return {color:isActive?'red':'grey'};
        }}
        className={({isActive})=>{
          return( isActive ? 'link active' : 'link')
        }}>Home</NavLink>
        <NavLink to='/about' style={({isActive})=>{
          return {color:isActive?'red':'grey'};
        }}
        className={({isActive})=>{
          return( isActive ? 'link active' : 'link')
        }}>About</NavLink>
        <NavLink to='/products' style={({isActive})=>{
          return {color:isActive?'red':'grey'};
        }}
        className={({isActive})=>{
          return( isActive ? 'link active' : 'link')
        }}>Product</NavLink>
                <NavLink to='/login' style={({isActive})=>{
          return {color:isActive?'red':'grey'};
        }}
        className={({isActive})=>{
          return( isActive ? 'link active' : 'link')
        }}>Login</NavLink>
    </nav>
  )
}

export default Navbar