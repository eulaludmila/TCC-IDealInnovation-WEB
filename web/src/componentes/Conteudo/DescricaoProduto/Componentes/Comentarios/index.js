import React, { Component } from 'react';

export default class Comentarios extends Component{
    render(){
        return(
            <div>
                <div className="form-row m-3">
                    <div className="col-md-8 container">
                        <div className="card">
                            <div className="card-body">
                                <img src="img/bolo_chocolate.jpg" className="img_pessoa mr-2" alt="Responsive "/>
                                <p className="card-text mt-3">Roberto Carlos - 12/05/2019</p>
                                <p className="card-text">Muito bom! Entrega no horário combinado, sem surpresas! Recomendo boleiro e o bolo!</p>
                                <div className="avaliacao">
                                    <div className="rate">
                                        <input type="radio" id="star5" name="ratez" value="5" />
                                        <label htmlFor="star5" title="5 entrelas">5 stars</label>
                                        <input type="radio" id="star4" name="rate" value="4" />
                                        <label htmlFor="star4" title="4 entrelas">4 stars</label>
                                        <input type="radio" id="star3" name="rate" value="3" />
                                        <label htmlFor="star3" title="3 entrelas">3 stars</label>
                                        <input type="radio" id="star2" name="rate" value="2" />
                                        <label htmlFor="star2" title="2 entrelas">2 stars</label>
                                        <input type="radio" id="star1" name="rate" value="1" />
                                        <label htmlFor="star1" title="1 entrela">1 star</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-row mt-3">
                    <div className="col-md-11">
                        <hr className="linha"/>
                    </div>
                </div>
            </div>
        );
    }
}