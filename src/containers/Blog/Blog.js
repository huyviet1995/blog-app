import React, { Component } from 'react';
import Posts from './Posts/Posts'
import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import './Blog.css';

class Blog extends Component {
    render () {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{ color: '#fa923' }}
                            >Home </NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search: '?quick-submit=true',
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1> Home </h1>}/> */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from='/' to='/posts'/>
                </Switch>
            </div>
        );
    }
}

export default Blog