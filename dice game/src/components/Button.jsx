



function Button(props) {

  return (
    <button
      onClick={props.onclick}
      className={`${props.isOutline ? "outline-btn" : "btn"} font-[Iceland] text-2xl`}>
      {props.btnText}
    </button>
  )
}

export default Button