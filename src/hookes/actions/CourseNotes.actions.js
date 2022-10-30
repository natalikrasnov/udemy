export const addNoteAction = (note) => ({
  type: "ADD_NOTE",
  note,
});

export const setNotesAction = (notes) => ({
  type: "SET_NOTES",
  notes,
});

export const SaveNotesAction = (note) => ({
  type: "SAVE_NOTE",
  note,
});

export const deleteItemAction = (id) => ({
  type: "DELETE_NOTE",
  id,
});
