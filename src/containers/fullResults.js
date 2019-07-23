import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BreadCumbs from '../components/breadcrumbs'; 
import BookTile from '../components/bookTile';
import axios from 'axios';
import convert from 'xml-js';
// import LazyLoad from 'react-lazyload';
import InfiniteScroll from 'react-infinite-scroller';

class FullResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAdultCount: 0,
      inputValue: '',
      books: [],
      activePage: 1,
      hasMoreItems: true,
    };
  }

  componentDidMount(){
    const { activePage } = this.state;
    var searchResult = '';
    let totalResponse = 0;
    axios.get(`https://www.goodreads.com/search/index.xml?key=DEZZre4OeBQSqC0L3wQQ&q=${this.props.searchInput}&page=${activePage}&search[field]=title`)
    .then((response) => {
      var result = convert.xml2js(response.data, {compact: true});
      searchResult = result.GoodreadsResponse.search.results.work;
      totalResponse = result.GoodreadsResponse.search['total-results']._text;
      this.setState({
        books: searchResult || [],
        totalResults: totalResponse,
        activePage: activePage + 1,
      })
  })
}

loadItems() {
  console.log('load Item called')
  const { activePage, books } = this.state;
    var searchResult = [];
    let totalResponse = 0;
    axios.get(`https://www.goodreads.com/search/index.xml?key=DEZZre4OeBQSqC0L3wQQ&q=${this.props.searchInput}&page=${activePage}`)
    .then((response) => {
      var result = convert.xml2js(response.data, {compact: true});
      searchResult = result.GoodreadsResponse.search.results.work;
      totalResponse = result.GoodreadsResponse.search['total-results']._text;
      this.setState({
        books: [...books, ...searchResult] || [],
        totalResults: totalResponse,
        hasMoreItems: false,
        activePage: activePage + 1,
      })
  })
}

  render() {
    const { books } = this.state;
    console.log('books from backend', this.state.books);
    console.log('full results props', this.props);
    const loader = <div className="loader"><h1>Loading ...</h1></div>;
    return(
      <div className="container" ref={(ref) => this.scrollParentRef = ref}>
        <BreadCumbs
          routeName={this.props.location.pathname}
        />
        <div className="col">
            <h5>Showing results for: {this.props.searchInput}</h5>
        </div>
        <div className="container">
        <div className="row justify-content-center">
          {books.map((book,index) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3" key={`${index}_${book.title}`}>
                {/* <LazyLoad height={200}>
                  <BookTile 
                      bookTitle={book.title}
                      authorName={book.author}
                      bookRating={book.rating}
                      data={book}
                    />
                </LazyLoad> */}

                <InfiniteScroll
                  pageStart={0}
                  loadMore={this.loadItems.bind(this)}
                  hasMore={this.state.hasMoreItems}
                  loader={loader}
                  getScrollParent={() => this.scrollParentRef}
                >
                  <div className="tracks">
                    <BookTile 
                        bookTitle={book.title}
                        authorName={book.author}
                        bookRating={book.rating}
                        data={book}
                    />
                  </div>
                </InfiniteScroll>
              </div>
            )
          })}
          </div>
        </div>
    </div>
    )
  }
}

FullResults.propTypes = {
  searchInput: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    searchInput: state.searchInput,
  };
}

export default connect(mapStateToProps)(FullResults);

