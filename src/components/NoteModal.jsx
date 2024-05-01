import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Textarea } from '@chakra-ui/react';
import { useState } from 'react';

const NoteModal = ({ isOpen, onClose, onSave, onEdit, initialRef, note }) => {
  const [content, setContent] = useState(note ? note.content : '');

  const handleSave = () => {
    if (note) {
      onEdit({ ...note, content });
    } else {
      onSave({ content });
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{note ? 'Edit Note' : 'Add Note'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder='Write your note here...' />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSave}>
            {note ? 'Update' : 'Save'}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NoteModal;