import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import Select from 'react-select'
import { setAdultValue, setChildrenValue } from '../actions/PersonActions';

const colourOptions = [
  {
    label: 'red',
    value: 'red',
  },
  {
    label: 'green',
    value: 'green',
  },
  {
    label: 'blue',
    value: 'blue',
  },
  {
    label: 'yellow',
    value: 'yellow',
  },
]
const filterColors = (inputValue) => {
  return colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAdultCount: 0,
      inputValue: '',
    };
  }

  componentWillMount(){
  }

  handleAdult = () => {
    this.setState({totalAdultCount: this.state.totalAdultCount + 1},
      () => {
        this.props.dispatch(setAdultValue(this.state.totalAdultCount));
    })
  }

  handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };

  render() {
    return(
      <div>
        <div className="home-screen space-2" style={{paddingLeft: '0', backgroundColor:'#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
				<div className={'homeCoverStyle'} style={{background: `url(${require('../img/library.jpg')})`}}>
				</div>
					<div className={'coverTextWrapper'}>
					<div>
						<div className='searchButtonBar'>
							<h1 className='searchButtonText'>Search</h1>
						</div>
            <AsyncSelect
              className={'selectControl'}
              cacheOptions
              loadOptions={loadOptions}
              defaultOptions
              onInputChange={this.handleInputChange}
              placeholder={`Search by keyword...`}
            />
					</div>
					</div>
				</div>
        <Link to="/detail">Go to detail</Link>
        <p>Searched Item is {this.state.inputValue}</p>
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

