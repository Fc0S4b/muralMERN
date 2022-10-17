import { initialState } from './appContext';
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_NEW_BEGIN,
  CREATE_NEW_SUCCESS,
  CREATE_NEW_ERROR,
  GET_NEWS_BEGIN,
  GET_NEWS_SUCCESS,
  SET_EDIT_NEW,
  DELETE_NEW_BEGIN,
  EDIT_NEW_BEGIN,
  EDIT_NEW_SUCCESS,
  EDIT_NEW_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  CHANGE_FAVORITE,
  CHANGE_TO_DARKMODE,
  CHANGE_TO_LIGHTMODE,
  SET_WATCH_NEW,
} from './actions';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Por favor, complete los datos faltantes',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      newLocation: action.payload.user.location,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Usuario creado! redirigiendo...',
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      newLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'Éxito, redirigiendo',
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      newLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: '',
      newLocation: '',
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      newLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'Perfil actualizado!',
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return { ...state, page: 1, [action.payload.name]: action.payload.value };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editNewId: '',
      headline: '',
      description: '',
      newLocation: state.userLocation,
      newType: 'información',
      status: 'pendiente',
    };
    return { ...state, ...initialState };
  }
  if (action.type === CREATE_NEW_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_NEW_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Nueva noticia creada!',
    };
  }
  if (action.type === CREATE_NEW_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_NEWS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_NEWS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      news: action.payload.news,
      totalNews: action.payload.totalNews,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === SET_EDIT_NEW) {
    const newPost = state.news.find(
      (singleNew) => singleNew._id === action.payload.id
    );
    // agregar texto de textarea
    const { _id, headline, description, newLocation, newType, status } =
      newPost;
    return {
      ...state,
      isEditing: true,
      editNewId: _id,
      headline,
      description,
      newLocation,
      newType,
      status,
    };
  }
  if (action.type === DELETE_NEW_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_NEW_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_NEW_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Noticia actualizada!',
    };
  }
  if (action.type === EDIT_NEW_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === SHOW_STATS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      statsStatus: action.payload.statsStatus,
      statsNewType: action.payload.statsNewType,
      monthlyNews: action.payload.monthlyNews,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',
      searchStatus: 'todo',
      searchType: 'todo',
      sort: 'nuevas',
      searchFavorite: 'todo',
    };
  }
  if (action.type === CHANGE_PAGE) {
    return {
      ...state,
      page: action.payload.page,
    };
  }
  if (action.type === CHANGE_FAVORITE) {
    return {
      ...state,
      favorite: action.payload.favorite,
    };
  }
  if (action.type === CHANGE_TO_DARKMODE) {
    return {
      ...state,
      theme: 'dark-theme',
    };
  }
  if (action.type === CHANGE_TO_LIGHTMODE) {
    return {
      ...state,
      theme: 'light-theme',
    };
  }
  if (action.type === SET_WATCH_NEW) {
    const newPost = state.news.find(
      (singleNew) => singleNew._id === action.payload.id
    );

    // agregar texto de textarea
    const { headline, description, newLocation, newType, status, createdAt } =
      newPost;
    return {
      ...state,
      headline,
      description,
      newLocation,
      newType,
      status,
      createdAt,
    };
  }

  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
