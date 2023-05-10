import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    // console.log('Modal open');
    window.addEventListener('keydown', this.pressEscBtn);
  }

  componentWillUnmount() {
    // console.log('Modal close');
    window.removeEventListener('keydown', this.pressEscBtn);
   }

  pressEscBtn = e => {
    // console.log(e);
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    const { onCloseModal, children } = this.props;

    return (
      <div className="Overlay" onClick={onCloseModal}>
        <div className="Modal">{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
