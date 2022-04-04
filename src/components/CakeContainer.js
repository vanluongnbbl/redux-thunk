import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux/cakes/cakeActions'
function CakeContainer(props) {
  return (
    <div>
        <h1>Number of cakes - {props.numberOfCakes}</h1>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.numberOfCakes
    }
}

const mapDispatchToProps = dispatch  => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}



export default connect(
  mapStateToProps, mapDispatchToProps
)(CakeContainer)