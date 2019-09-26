import React, { Component } from 'react';
import {connect} from 'react-redux';

class Pets extends Component {
        componentDidMount() {
        this.getPets();
    }

    
    getPets = () => {
        this.props.dispatch({
            type: 'GET_PETS'
        })
    }
    
    render() {
        return (
            <>
            {JSON.stringify(this.props.pets)}
            <h1>Pets component</h1>
            <div>
                <h2>Add Pet</h2>
                <input placeholder="Pet Name"/>
                <input placeholder="Pet Color"/>
                <input placeholder="Pet Breed"/>
                <select/>
                <button>Submit</button>
            </div>
            <div>
                <h2>History</h2>
                <table>
                    <thead>
                        <th>
                            Owner
                        </th>
                        <th>
                            Pet
                        </th>
                        <th>
                            Breed
                        </th>
                        <th>
                            Color
                        </th>
                        <th>
                            Checked In
                        </th>
                        <th>
                            Actions
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.pets}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        pets: state.petsReducer
    }
}

export default connect(mapStateToProps)(Pets);