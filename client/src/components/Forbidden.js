import React from 'react';
import {Link} from 'react-router-dom';


export default class Forbidden extends React.Component {

    render(){

        const {from} = this.props.location;
        return(
                <div className="bounds">
                    <h1>Forbidden</h1>
                    <p> Oh oh! You can't access this page.</p>
                    <h2>
                        <p>
                            <Link to={
                                from ? 
                                    {pathname: '/signup',
                                    from: from.pathname}
                                :
                                    {pathname: '/signup'}
                                }
                            >Sign Up</Link> or <Link to={
                                                    from ? 
                                                        {pathname: '/signin',
                                                        from: from.pathname}
                                                    :
                                                        {pathname: '/signin'}
                                                    } >Sign In</Link></p>
                    </h2>
                    <p><Link to={'/'} >Home</Link></p>
                </div>
        )
    }
}
