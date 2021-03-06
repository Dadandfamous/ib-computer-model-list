import * as React from 'react'
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails'
import { addCompData } from './actions/AddCompData'

class ModelDetailsContainer extends React.Component{

  render() {

    // This is the best I could do
    // Lost the overview in this part of the exercise
    return <ModelDetails comp={this.props.comp} />
  } 
}

const mapStateToProps = (state) => {
  return {
    comp: state.comp
  }
}

export default connect (mapStateToProps, { addCompData })(ModelDetailsContainer)