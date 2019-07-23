import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

class BookTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAdultCount: 0,
      inputValue: '',
    };
  }

  componentWillMount(){
  }

  render() {
    return (
      <div className="main">
        <Card>
          <CardImg className="card-image" top width="100%" src={this.props.data.best_book.image_url._text} alt="Card image cap" />
          <CardBody>
            <CardTitle className="card-book-title">{this.props.data.best_book.title._text}</CardTitle>
            <CardSubtitle>{this.props.data.best_book.author.name._text}</CardSubtitle>
            <CardText>Rating {this.props.data.average_rating._text}</CardText>
            <StarRatingComponent 
              name="rating" 
              editing={false}
              starCount={5}
              value={parseInt(this.props.data.average_rating._text)}
            />
            <Link to={{ pathname: `/detail/${this.props.data.id._text}`, data: this.props.data }}>
              <Button className="btn-primary w-100">View Details</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
      )
    }
  }

BookTile.propTypes = {
  totalAdultCount: PropTypes.number,
  totalChildrenCount: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    totalAdultCount: state.personCount.adultValue,
    totalChildrenCount: state.personCount.childrenValue,
  };
}

export default connect(mapStateToProps)(BookTile);

