import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ category }) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Let's Begin !</h3>
          <p className="py-4">
            You are about to start the{' '}
            <span className="px-1 py-0 border-b-2 border- border-primary text-primary font-bold">
              {category.name}
            </span>{' '}
            quiz. Please note that you cannot go back once you start. Make sure
            you are ready to begin.
          </p>
          <div className="grid pb-4">
            <div className="flex justify-start gap-4">
              <span className="text-right flex flex-col items-start font-bold">
                <div>Total Questions:</div>
                <div>Total Time:</div>
              </span>
              <span>
                <div>10</div>
                <div>10 Minutes</div>
              </span>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={`/quiz/${category.id}`}
                onClick={() => document.getElementById('my_modal_1').close()}
              >
                <button className="btn btn-primary mr-3">Start Quiz</button>
              </Link>
              <button className="btn btn-outline">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
