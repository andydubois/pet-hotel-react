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

    handleClick = (id) => {
        this.props.dispatch({
            type: 'DELETE_OWNER',
            payload: id
        })
    }

    render() {
        return (
    
          <>
            <h1>Owners component</h1>
            <div>
              <h2>Add Owner</h2>
              <input placeholder="Add Owner" />
              <button>Submit</button>
            </div>
              <h2>Owners</h2>
              <table>
                <thead>
                  <th>Name</th>
                  <th>Number of pets</th>
                  <th>Action</th>
                </thead>
                <tbody>
                    {
                        this.props.owners.map((owner) => {
                            return <> 
                            <tr>
                            <td>{owner.name}</td>
                            <td>{owner.count}</td>
                            <td>
                                <button 
                                onClick={() => this.handleClick(owner.id)}>
                                    Delete
                                </button>
                            </td>
                            </tr>
                             </>
                        })
                    }
                </tbody>
              </table>
        </>
        );
    }
}

const mapStateToProps = state => {
    return {
        owners: state.ownersReducer
    }
}

export default connect(mapStateToProps)(Owners);