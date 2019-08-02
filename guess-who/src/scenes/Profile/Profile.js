import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import './styles.scss';


// const Profile = props => {
class Profile extends React.Component {
    
    // useEffect(() => {
    //     console.log("props.userId in useEffect: ", props.userId);
    //     props.getUser(props.userId);
    // }, [])

    componentDidMount = () => {
        this.props.getUser(this.props.userId);
    }

    // const logout = () => {
    logout = () => {   
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        this.props.history.push("/")
    } 
    
    render() {
        return (
            <div className='profile'>
                <Header />
                <Body username={this.props.username} highScore={this.props.highScore} />
                <Footer logout={this.logout} />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        ...state,
        username: state.username,
        highScore: state.highScore,
        userId: state.userId
    }
}

export default connect(
    mapStateToProps,
    { getUser }
)(Profile);