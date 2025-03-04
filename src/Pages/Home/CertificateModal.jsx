import React, { useRef } from "react";
import Loading from "./Loading";

const CertificateModal = ({ isOpen, setIsOpen, certificats }) => {
  const modalRef = useRef(null);

  const handleModalClose = (e) => {
    if (modalRef.current && e.target === modalRef.current) {
      setIsOpen(false);
    }
  };
  if (!certificats) {
    return (
      <dialog onClick={handleModalClose} open={isOpen} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <Loading></Loading>
        </div>
      </dialog>
    );
  }
  return (
    <dialog onClick={handleModalClose} ref={modalRef} open={isOpen} className="modal">
      <div className="modal-box w-11/12 max-w-5xl dark:bg-neutral">
        <div>
          <img className="w-full rounded-xl" src={certificats} alt="" />
        </div>
    
      </div>
    </dialog>
  );
};

export default CertificateModal;
