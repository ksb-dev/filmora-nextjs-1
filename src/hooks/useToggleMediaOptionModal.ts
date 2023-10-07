export const useToggleMediaOptionModal = (modalRef: any) => {
  const showModal = () => {
    modalRef.current!.style.transform = "scale(1)";
  };
  const hideModal = () => {
    modalRef.current!.style.transform = "scale(0)";
  };
  return { showModal, hideModal };
};
