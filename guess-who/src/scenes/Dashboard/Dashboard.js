import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';


import './styles.scss';


// const Dashboard = props => {
class Dashboard extends React.Component {

    // useEffect(() => {
    //     props.getUser(props.userId);
    // }, [])

    componentDidMount = () => {
        this.props.getUser(this.props.userId);
    }

    render() {
        return (
            <div className='dashboard'>
                <Header />
                <Body /> 
                <Footer highScore={this.props.highScore} />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        ...state,
        welcomeMesage: state.welcome,
        highScore: state.highScore,
        userId: state.userId
    }
}

export default connect(
    mapStateToProps,
    { getUser }
)(Dashboard);