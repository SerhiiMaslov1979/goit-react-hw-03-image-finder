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
     const { inputValue } = this.state;
    this.props.onSubmitForm(inputValue);
    this.setState({ inputValue: '' });
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
          <button type="submit" className="SearchForm-button">
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
