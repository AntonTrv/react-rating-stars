import React from 'react';
import Star from './Star';
import TextArea from './TextArea';

// class StarRating extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       starsSelected: 0
//     }
//
//     this.change = this.change.bind(this);
//   }
//
//   change(starsSelected){
//     this.setState({starsSelected});
//   }
//
//   render(){
//     const {totalStars} = this.props
//     const {starsSelected} = this.state
//
//     return(
//       <div className='star-rating'>
//         {[...Array(totalStars)].map((star,i)=>
//           <Star key={i}
//                 selected={i<starsSelected}
//                 onClick={() => this.change(i+1)}
//                 />
//         )}
//         <p>{starsSelected} of {totalStars} stars</p>
//       </div>
//     )
//   }
// }

// StarRating.propTypes = {
//   totalStars: PropTypes.number
// }
//
// StarRating.defaultProps = {
//   totalStars: 5
// }

class StarRating extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      starsSelected: 0,
      totalStars: 5
    }

    this.change = this.change.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  change(el) {
    this.setState({starsSelected: el})

  }

  handleSubmit(e){
    e.preventDefault();
    this.state.starsSelected <= 1 ? alert(`Thank you for ${this.state.starsSelected} star, we will become better!`) : alert(`Thank you for ${this.state.starsSelected} stars, we will become better!`)
    e.target.elements[0].value = '';
    e.target.elements[0].focus();
    this.setState({starsSelected: 0})
  }


  render(){

      return(<div className='rating'>

      <h1>Make us better!</h1>
      <p>rate us</p>
      <hr/>
        <div className='stars'>
      {[...Array(this.state.totalStars)].map((el,i)=>
        <Star  key={i} selected={i<this.state.starsSelected} onClick={() => this.change(i+1)}/>)}
        </div>
        <p>{this.state.starsSelected} of {this.state.totalStars} stars</p>
        <TextArea handleSubmit={this.handleSubmit}/>
      </div>)
  }
}




export default StarRating;
