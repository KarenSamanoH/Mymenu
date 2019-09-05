import React, {Component} from 'react';
import slide from './slide';
import slide from './RightArrow';
import slide from './LeftArrow';
import Slide from './slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';



export default class Slider extends Component {
    constructor (props) {
        super(props);

        this.state = {
            images:[
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
            ],
        }
        currentIndex: 0
    }

/** Methods */


goToPrevSlide = () => {
    this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1
  
    }));

}

goNextSlide = () => {
    this.setState(prefvState => ({
       currentIndex: prevState.currentIndex + 1
    }));

}


    render(){
        return(

            <div className="slider">

                {
                    this.state.images.map((image, i) =>(
                        <Slide key={i} image={image} />
                    ))
                    
                }

                <LeftArrow
                goToPrevSlide={this.goToPrevSlide}
                />


                <RightArrow
                goNextSlide={this.goNextSlide}
                />
            </div>
        );
    }
}