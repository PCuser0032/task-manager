import React from "react";

function EditModalWindow({
  editTaskHandler,
  cancelButtonHandler,
  acceptButtonHandler,
}) {
  return (
    <div className="position-fixed vh-100 vw-100 d-flex justify-content-center align-items-center bg-green-1 bg-opacity-75">
      <div className="w-25 bg-green-2 px-4 py-3 rounded rounded-3">
        <div className="text-center mb-5">
          <h4>Edit task</h4>
        </div>
        <div className="mb-5">
          <input
            type="text"
            onChange={editTaskHandler}
            className="form-control py-2 px-3"
            placeholder="New task description"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            onClick={cancelButtonHandler}
            className="btn btn-danger me-3 py-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={acceptButtonHandler}
            className="btn btn-success py-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModalWindow;
