const OBTENER_EQUIPOS = 'OBTENER_EQUIPOS';

export default function reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case OBTENER_EQUIPOS:
      return { ...state, clubes: payload };
    default:
      return state;
  }
}
