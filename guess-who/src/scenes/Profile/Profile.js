import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { getUser } from '../../actions';
import { getScore } from '../../actions';
import { parseToken } from '../../../src/actions/parseToken';

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
        // this.props.getUser(this.props.userId);
        console.log(parseToken(localStorage.getItem("token")))
        let userID = parseToken(localStorage.getItem("token")).user.id
        console.log("userID", userID);
    }
    
    getHighScore = id => {
        this.props.getScore(id);
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
                {/* <Body username={localStorage.getItem("username")} highScore={this.props.highScore} /> */}
                <Body username={localStorage.getItem("username")} highScore={this.getHighScore(this.userID)} />
                <Footer logout={this.logout} />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        ...state,
        // username: state.username,
        // highScore: state.highScore,
        userId: state.userId
    }
}

export default connect(
    mapStateToProps,
    // { getUser }
    { getScore }
)(Profile);