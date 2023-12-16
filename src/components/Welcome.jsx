
// Below one uses Hooks instead of classes as above, which makes it easier to write

const Welcome = (props) => {
  return <h1>Meet the <i style={{color: "steelblue"}}>{props.name}</i></h1>
}

export default Welcome