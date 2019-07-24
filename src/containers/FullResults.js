import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BreadCumbs from '../components/Breadcrumbs'; 
import BookTile from '../components/BookTile';
import axios from 'axios';
import convert from 'xml-js';
import InfiniteScroll from 'react-infinite-scroller';
import Loader from 'react-loader-spinner';
import { CLIENT_KEY } from '../config';

class FullResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      activePage: 1,
      hasMoreItems: true,
      totalResults: 0
    };
  }

loadItems() {
  console.log('load Item called', CLIENT_KEY);
  const { activePage, books, totalResults } = this.state;
    var searchResult = [];
    let totalResponse = 0;
    // if(totalResults-1 !== books.length ) {
      if(totalResults-1 !== books.length ) {
    axios.get(`https://www.goodreads.com/search/index.xml?key=${CLIENT_KEY}&q=${this.props.match.params.q}&page=${activePage}`)
    .then((response) => {
      var result = convert.xml2js(response.data, {compact: true});
      searchResult = result.GoodreadsResponse.search.results.work;
      totalResponse = result.GoodreadsResponse.search['total-results']._text;
      this.setState({
        books: searchResult ? [...books, ...searchResult] : this.state.books ,
        totalResults: totalResponse,
        activePage: activePage + 1,
      }, () => {
        this.setState({
          hasMoreItems: totalResponse > books.length ? true : false
        })
      })
    })
  } else {
    this.setState({
      hasMoreItems: false
    })
  }
}

  render() {
    const { books } = this.state;
    const loader = <div className="loader">
      <Loader
        className=""
        type="Oval"
        color="#1a8e85"
        height="100"	
        width="150"
      />
      </div>;
    return(
      <div className="container" ref={(ref) => this.scrollParentRef = ref}>
        <BreadCumbs
          routeName={this.props.location.pathname}
        />
        <div className="col">
            <h5>Showing results for: {this.props.match.params.q}</h5>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3">
              <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader}
                getScrollParent={() => this.scrollParentRef}
              >
              {books.map((book,index) => {
              return (
                <div className="tracks my-3" key={index}>
                  <BookTile
                    data={book}
                  />
                </div>
                )
              })}
              </InfiniteScroll>
            </div>
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
    searchInput: state.searchInput.searchedInput,
    results: state.searchInput.inifiniteScrollResults
  };
}

export default connect(mapStateToProps)(FullResults);

