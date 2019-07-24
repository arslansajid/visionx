import React, { Component } from 'react';
import BreadCrumbs from '../components/Breadcrumbs';
import StarRatingComponent from 'react-star-rating-component';
import { fetchBookData, fetchBookReviews } from '../actions/Actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: {},
      totalReviews: [],
    };
  }

  componentDidMount() {
    const { location } = this.props;
    if(location.data) {
      this.fetchBookDataAndReviews();
    }
  }

  fetchBookDataAndReviews = () => {
    const { location } = this.props;
    this.props.dispatch(fetchBookData(location.data.best_book.id._text))
    .then((res) => {
      this.setState({
        bookData: this.props.results
      })
    })
    this.props.dispatch(fetchBookReviews(location.data.best_book.author.name._text, location.data.best_book.title._text))
    .then((res) => {
      this.setState({
        totalReviews: this.props.reviews
      })
    })
  }

  render() {
    const { bookData } = this.state;
    console.log('Props', this.props.location.data);
    console.log('bookData', this.state.bookData);
    console.log('totalReviews', this.state.totalReviews);
    if(this.props.location.data) {
      return (
        <div className="container my-3">
          <div className="">
            <BreadCrumbs routeName={this.props.location.pathname} />
          </div>
          {Object.keys(bookData).length
          ?
          <div className="book-data">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 mb-2">
                <img style={{maxHeight: '250px'}} src={bookData.image_url._text} alt="img-cover" height="250px" width="90%"></img>
              </div>
              <div className="col-12 col-md-8 col-lg-8">
                <h3>{bookData.title._text ? bookData.title._text : bookData.title._cdata}</h3>
                <h5>{bookData.authors.author.length ? bookData.authors.author[0].name._text : bookData.authors.author.name._text }</h5>
                <p>Rating: {bookData.average_rating._text}</p>
                <StarRatingComponent 
                  name="rating" 
                  editing={false}
                  starCount={5}
                  value={parseFloat(bookData.average_rating._text)}
                />
                <h5>Publisher: <span className="book-data">{bookData.publisher._text ? bookData.publisher._text : 'Data currently not available...'}</span></h5>
                <h5>Num of pages: <span className="book-data">{bookData.num_pages._cdata ? bookData.num_pages._cdata : 'Data currently not available...'}</span></h5>
                <h5>Published on: <span className="book-data">{bookData.publication_day._text ? `${bookData.publication_day._text}-${bookData.publication_month._text}-${bookData.publication_year._text}` : 'Data currently not available...'}</span></h5>
              </div>
            </div>
            <hr />
            <div className="row my-3">
              <div className="col">
                <h3>Reviews</h3>
                <h5>Ratings Count: <span className="book-data">{bookData.work.ratings_count ? bookData.work.ratings_count._text : 'Data currently not available...'}</span></h5>
                <h5>Ratings Sum: <span className="book-data">{bookData.work.ratings_sum ? bookData.work.ratings_sum._text : 'Data currently not available...'}</span></h5>
                <h5>Reviews Count: <span className="book-data">{bookData.work.reviews_count ? bookData.work.reviews_count._text : 'Data currently not available...'}</span></h5>
              </div>
            </div>
          </div>
          :
          null
          }
      </div>
    )
    } else {
        window.location.replace('/');
        return null;
    }
  }
}

Detail.propTypes = {
  searchInput: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    searchInput: state.searchInput.searchedInput,
    results: state.searchInput.results,
    reviews: state.searchInput.reviews,
  };
}

export default connect(mapStateToProps)(Detail);

