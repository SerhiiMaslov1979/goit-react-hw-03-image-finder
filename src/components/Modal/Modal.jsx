import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.pressEscBtn);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressEscBtn);
    this.props.onCloseModal();
  }

  pressEscBtn = e => {
    console.log(e);
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

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.pressEscBtn);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.pressEscBtn);
//   }

//   pressEscBtn = event => {
//     console.log(event);
//     if (event.code === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };
//   onOverlayClick = event => {
//     if (event.target === event.currentTarget) this.props.onCloseModal();
//   };
//   render() {
//     const { onCloseModal, children } = this.props;

//     return (
//       <div className="Overlay" onClick={this.onOverlayClick}>
//         <div className="Modal">{children}</div>
//       </div>
//     );
//   }
// }

// export default Modal;
