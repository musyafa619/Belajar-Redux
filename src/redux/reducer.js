function reducer(state = { nama: 'Musyafa', umur: 18 }, action) {
  if (action.type === 'TAMBAH') {
    return (state = state + 1);
  }
  return state;
}

export default reducer;
