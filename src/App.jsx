import React, { Component, useState, useEffect} from 'react'
import Welcome from './components/Welcome'
import SupportButton from './components/Support'
import ListCast from './components/ListCast'
import Modals from './components/Modals'
import Nav from './components/Nav'

// class Welcome extends React.Component {
//   constructor (props) {
//     super(props)
//   }

//   render() {
//     return <h1>Meet the <i style={{color: "steelblue"}}>{this.props.name}</i></h1>
//   }
// }

function App() {
  const name = 'StarGazers'
  const [cast, setCast] = useState([])
  let [memberInfo, setMemberInfo] = useState(null)
  
  async function fetchCast() {
    let response = await fetch('cast.json')
    setCast(await response.json())
  }

  useEffect(() => {
    fetchCast()
  })

  return (
    <>
      <Nav cast={cast} onChoice={(info) => setMemberInfo(info)} />
      <div className="container">
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          {/* <h1>Meet the <i style={{ color: "SteelBlue" }}>{name}</i></h1> */}
          <Welcome name={name} />
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <ListCast cast={cast} onChoice={ (info) => setMemberInfo(info) } />
          <SupportButton />
          {
            memberInfo && <Modals member={memberInfo} handleClose={() => {setMemberInfo(null)}} />
          }
        </hgroup>
      </div>
    </>
  )
}
export default App
