import React from 'react';

import { withRouter } from 'react-router-dom'

import './Modal.scss';

const Modal = ({history, pathname, hideModal}) => {
  return (
    <div className="modal-background">
      <div className="modal">
        <p className="alert-header">
          Alert!
        </p>
        <p className="alert-body">
          Are you sure you want to leave? All data will be lost
        </p>
        <div className="modal-buttons">
          <button onClick={() => {
            history.push(pathname ? pathname: '/');
            hideModal()}}>
            Yes
          </button>
          <button onClick={hideModal}>
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Modal);