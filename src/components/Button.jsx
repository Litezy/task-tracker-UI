import Proptypes from 'prop-types'
const Button = ({color, text, onclick}) => {
//  const onClick = () =>{
//     console.log(event)
//  }

  return (
    <>
    <button onClick={onclick} style={{backgroundColor: color}} className="btn">{text}</button>
    </>
  )
}
Button.defaultProps ={
    color:'steelblue'
}

Button.propTypes = {
    text: Proptypes.string,
    color: Proptypes.string,
    onclick: Proptypes.func.isRequired
}
export default Button