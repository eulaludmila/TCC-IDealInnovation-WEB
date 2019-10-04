import React, { Component } from 'react';
// import '../../css/style.css';
import Carousel from 'react-bootstrap/Carousel'
import img from '../../../../../img/blur.jpg'
import img2 from '../../../../../img/baking.jpg'
import img3 from '../../../../../img/bolo.jpg'
// export class SliderHome extends Component{

//     render(){
//         return(
//                 <div className="container-fluid area_slider" id={this.props.id}>
      
//                 </div>    

//         );
//     }

// }

export class SliderHome extends Component{

    constructor(props){
        super(props)
        this.state = {index:0, setIndex:0, direction:null,setDirection:null}
    }

    handleSelect = (selectedIndex, e) => {
      this.setState({index:selectedIndex});
      this.setState({direction:e.direction});
    };
    render(){
        return (
                <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                    <Carousel.Item style={{'height':'800px'}}>
                    <img
                        className="d-block w-100 h-100"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':'800px'}}>
                    <img
                        className="d-block w-100 h-100"
                        src={img2}
                        alt="Second slide"
                    />
            
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':'800px'}}>
                    <img
                        className="d-block w-100 h-100"
                        src={img3}
                        alt="Third slide"
                    />
            
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        );
    }
}
  
