


const Button = (props) => {
  return ( 
    <button className={props.outline ? "outline-btn" : "primary-btn"}>
      {props.icon}
      {props.btnText}
    </button>
   );
}
 
export default Button;