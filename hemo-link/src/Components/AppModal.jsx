import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function AppModal({ isOpen, onClose, modalContent, footerContent }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent justifyContent="center" w={["90%", "90%", "90%", "100%"]}>
          <ModalHeader>{modalContent.header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalContent.body}</ModalBody>

          <ModalFooter justifyContent="center">
            {footerContent ? (
              footerContent
            ) : (
              <Button colorScheme="blue" onClick={onClose}>
                OK
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AppModal;
