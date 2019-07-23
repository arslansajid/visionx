import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import { setAdultValue } from '../actions/PersonActions';
import axios from 'axios';
import convert from 'xml-js';

const style = {
  menuHeaderStyle: {
    padding: '15px',
    background: '#1a8e85',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeScreen: {
    paddingLeft: '0',
    backgroundColor:'#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const Option = props => {
  return (
    <React.Fragment>
      <div className="select-option" style={{borderBottom: '1px solid', padding: '15px'}}>
      <Link to={{ pathname: `/detail/${props.value.id}`, data: props.data }}>
        <div>{props.label}</div>
        <div>{props.value.author}</div>
        {/* <components.Option {...props} /> */}
      </Link>
      </div>
    </React.Fragment>
  );
};

const MenuList = props => {
  if(props.selectProps.options.length >= 5) {
    return (
      <components.MenuList {...props}>
        {props.children}
        <Link to={{ pathname: '/full-results', searchInput: props.options[0].value.searchInput }}>
          <div style={style.menuHeaderStyle}>Show {props.options[0].value.totalOptions - 5} more results</div>
        </Link>
      </components.MenuList>
    )
    } else {
      return (
        <components.MenuList {...props}>
          {props.children}
        </components.MenuList>
      )
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAdultCount: 0,
      inputValue: '',
      selectedBook: '',
      searchOptions: [],
      totalResults: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleAdult = () => {
    this.setState({totalAdultCount: this.state.totalAdultCount + 1},
      () => {
        this.props.dispatch(setAdultValue(this.state.totalAdultCount));
    })
  }

  async handleInputChange (newValue) {
    var searchResult = '';
    let totalResponse = 0;
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    await axios.get(`https://www.goodreads.com/search/index.xml?key=DEZZre4OeBQSqC0L3wQQ&q=${inputValue}&search[field]=title`)
    .then((response) => {
      var result = convert.xml2js(response.data, {compact: true});
      console.log('result', result);
      searchResult = result.GoodreadsResponse.search.results.work.slice(0,5);
      totalResponse = result.GoodreadsResponse.search['total-results']._text;
      this.setState({
        searchOptions: searchResult || [],
        totalResults: totalResponse,
      })
      return searchResult;
    })
    searchResult && searchResult.length && searchResult.map((option, index) => {
      option.label = option.best_book.title._text;
      option.value = {name: option.best_book.title._text, author: option.best_book.author.name._text, id: option.best_book.id._text, totalOptions: this.state.totalResults, searchInput: newValue };
      return option;
    })
    return searchResult;
  };

  handleSelect = (selected) => {
    this.setState({
      selectedBook: selected
    })
  }

  render() {
    console.log('selectedBook from dropdown', this.state.selectedBook);
    console.log(this.state);
    return(
      <div className="main">
        <div className="home-screen space-2" style={style.homeScreen}>
				  <div className={'homeCoverStyle'} style={{background: `url(${require('../img/library.jpg')})`}}></div>
					<div className={'coverTextWrapper'}>
            <div>
              <Link to={{
                pathname: '/full-results',
                searchInput: this.state.inputValue,
                }}
              >
                <div className='searchButtonBar'>
                  <h1 className='searchButtonText'>Search</h1>
                </div>
              </Link>
              <AsyncSelect
                className={'selectControl'}
                cacheOptions
                loadOptions={this.handleInputChange}
                onChange={(value) => this.handleSelect(value)}
                placeholder={`Search by keyword...`}
                components={{ MenuList, Option }}
              />
            </div>
					</div>
				</div>
      </div>
    )
  }
}

Home.propTypes = {
  totalAdultCount: PropTypes.number,
  totalChildrenCount: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    totalAdultCount: state.personCount.adultValue,
    totalChildrenCount: state.personCount.childrenValue,
  };
}

export default connect(mapStateToProps)(Home);

