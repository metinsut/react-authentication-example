import React from 'react';
import {connect} from 'react-redux';
import * as ROUTES from '../constants/path';

const Home = ({home}) => {
    return (
        <main>
            {home &&
            <div className="main">
                <article>
                    <h1>{home.article.title}</h1>
                    <p>{home.article.desc}</p>
                    <img className="image" src={ROUTES.ASSETS + home.article.img} alt="test"/>
                </article>
                <aside>
                    <h1> {home.aside.title}</h1>
                    <p>{home.aside.desc}</p>
                </aside>
            </div>
            }
        </main>
    )
};

const mapStateToProps = (state) => {
    return ({
        home: state.Site.main
    })
};

export default connect(mapStateToProps)(Home);