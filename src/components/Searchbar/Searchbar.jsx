import React, { Component } from 'react';
import PropType from 'prop-types';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onInputValue = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitSearchForm = e => {
    e.preventDefault();
    console.log('Тють');
    const { inputValue } = this.state;
    this.props.onSubmitForm(inputValue);
    this.setState({ inputValue: '' });
    // console.log(this.props);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className="Searchbar">
        <form
          id="form"
          onSubmit={this.onSubmitSearchForm}
          className="SearchForm"
        >
          <button type="submit" className="button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="inputValue"
            value={inputValue}
            id="input"
            onChange={this.onInputValue}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propType = {
  onSubminForm: PropType.func.isRequired,
};

export default Searchbar;
