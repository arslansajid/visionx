import React, { Component } from 'react';
import BreadCrumbs from '../components/breadcrumbs';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';
import convert from 'xml-js';

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
    var bookDataResult = '';
    var reviewResult = '';
    // var totalResponse = 0;
    axios.get(`https://www.goodreads.com/book/show.xml?key=DEZZre4OeBQSqC0L3wQQ&id=${location.data.best_book.id._text}`)
    .then((response) => {
      var result = convert.xml2js(response.data, {compact: true});
      console.log('book data result', result);
      bookDataResult = result.GoodreadsResponse.book;
      this.setState({
        bookData: bookDataResult
      })
    })
    axios.get(`https://www.goodreads.com/book/title.xml?author=${location.data.best_book.author.name._text}&key=DEZZre4OeBQSqC0L3wQQ&title=${location.data.best_book.title._text}`)
    .then((response) => {
      var result = convert.xml2js(response.data, {compact: true});
      console.log('result of reviews', result);
      reviewResult = result.GoodreadsResponse;
      console.log('REVIEWS RESULT', reviewResult);
      // totalResponse = result.GoodreadsResponse.search['total-results']._text;
      this.setState({
        totalReviews: reviewResult || [],
        // totalResults: totalResponse,
      })
    })
  }

  render() {
    const { bookData } = this.state;
    console.log('Props', this.props.location.data);
    console.log('bookData', this.state.bookData)
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
            <div className="row my-3">
              <div className="col">
                <h3>Reviews</h3>
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

export default Detail;