import { useState } from 'react';
import { Box, SimpleGrid, useDisclosure, IconButton, useToast } from '@chakra-ui/react';
import { FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import NoteModal from '../components/NoteModal';

const Index = () => {
  const [notes, setNotes] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: notes.length + 1 }]);
    toast({
      title: 'Note added',
      description: "Your note has been added successfully.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    toast({
      title: 'Note deleted',
      description: "Your note has been deleted successfully.",
      status: 'error',
      duration: 2000,
      isClosable: true,
    });
  };

  const editNote = (updatedNote) => {
    setNotes(notes.map(note => note.id === updatedNote.id ? updatedNote : note));
    toast({
      title: 'Note updated',
      description: "Your note has been updated successfully.",
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <IconButton icon={<FaPlus />} isRound='true' size='lg' colorScheme='teal' onClick={onOpen} aria-label='Add note' />
      <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={5} mt={5}>
        {notes.map(note => (
          <Box key={note.id} p={5} shadow='md' borderWidth='1px'>
            <Box d='flex' justifyContent='space-between'>
              <IconButton icon={<FaEdit />} isRound='true' size='sm' onClick={() => onOpen(note)} aria-label='Edit note' />
              <IconButton icon={<FaTrash />} isRound='true' size='sm' colorScheme='red' onClick={() => deleteNote(note.id)} aria-label='Delete note' />
            </Box>
            <Box mt={2}>
              {note.content}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      <NoteModal isOpen={isOpen} onClose={onClose} onSave={addNote} onEdit={editNote} />
    </Box>
  );
};

export default Index;