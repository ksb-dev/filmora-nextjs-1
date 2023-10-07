export const useToggleMediaOptionModal = (modalRef: any) => {
  const showModal = () => {
    modalRef.current!.style.display = "flex";
    setTimeout(() => {
      modalRef.current!.style.opacity = "1";
    }, 100);
  };

  const hideModal = () => {
    modalRef.current!.style.opacity = "0";
    setTimeout(() => {
      modalRef.current!.style.display = "none";
    }, 100);
  };
  return { showModal, hideModal };
};
