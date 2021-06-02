import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <>
        <h1 className="text-center text-danger my-5">WelCome to My Web Page</h1>
        <div className="container text-lg-center">
            <div className="row">
                <div className="col-sm">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                    <img className="card-img-top" src="https://picsum.photos/150/100" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <img className="card-img-top" src="https://picsum.photos/150/100" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <img className="card-img-top" src="https://picsum.photos/150/100" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
,document.getElementById('root'));
