import React, {Component} from 'react';
import {connect} from 'react-redux';


class Owners extends Component {
    componentDidMount() {
        this.getOwners();
    }

    
    getOwners = () => {
        this.props.dispatch({
            type: 'GET_OWNERS'
        })
    }

    render() {
        return (
            <>
            <h1>Owners component</h1>
            <div>
                <h2>Add Owner</h2>
                <input/>
                <button>Submit</button>
            </div>
            <div>
                <h2>Owners</h2>
                <table>
                    <thead>
                        <th>
                            Name
                        </th>
                        <th>
                            Number of pets
                        </th>
                        <th>
                            Action
                        </th>
                    </thead>
                    <tbody>
                      
                      {this.props.owners}

                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        owners: state.ownersReducer
    }
}

export default connect(mapStateToProps)(Owners);