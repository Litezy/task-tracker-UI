import Button from "./Button"


const Header = ({title}) => {

   const onClick = ()=>{
    console.log('Click Event')
   }
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onclick ={onClick}/>
        
    </header>
  )
}

export default Header