import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_CONFIRM_PASSWORD,
  CHANGE_GENDER,
  CHANGE_BIRTHDAY,
  CHANGE_PHONE,
  CHANGE_PORTFOLIO,
  CHANGE_GEAR,
  CHANGE_YEARS,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_LOADING,
  GET_CATEGORIES_SUCCESS,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_LOADING,
  GET_LOCATIONS_FAILURE,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  TOGGLE_LOCATION,
  CHANGE_ERROR,
  SUBMIT_FORM_ERROR,
  SUBMIT_FORM_SUCCESS
} from "./actions"

const initial_state = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
  gender: "",
  birthday: new Date(),
  phone: "",
  gears: "",
  portfolio: "",
  categories: [],
  selectedCategories: [],
  locations: [],
  selectedLocation: null,
  emailError: false,
  nameError: false,
  passwordError: false,
  confirmPasswordError: false,
  genderError: false,
  birthdayError: false,
  selectedCategoriesError: false,
  locationError: false,
  selectedLocationError: false,
  gearsError: false,
  phoneError: false,
  portfolioError: false,
  categoryError: false,
  years: null,
  yearsError: false,
  loading: false,
  formSuccess: false,
  formError: false,
  formSent: false,
  formMessage: ""
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.value }
    case CHANGE_EMAIL:
      return { ...state, email: action.value }
    case CHANGE_GENDER:
      return { ...state, gender: action.value }
    case CHANGE_BIRTHDAY:
      return { ...state, birthday: action.value }
    case CHANGE_PHONE:
      return { ...state, phone: action.value }
    case CHANGE_PORTFOLIO:
      return { ...state, portfolio: action.value }
    case CHANGE_GEAR:
      return { ...state, gears: action.value }
    case CHANGE_YEARS:
      return { ...state, years: action.value }
    case CHANGE_PASSWORD:
      return { ...state, password: action.value }
    case CHANGE_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.value }
    case CHANGE_ERROR:
      return { ...state, [action.errorType+'Error']: action.isError }
    case GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.categories, loading: false }
    case GET_CATEGORIES_LOADING:
      return { ...state, loading: true }
    case GET_CATEGORIES_FAILURE:
      return { ...state, loading: false, message: action.message }
    case GET_LOCATIONS_SUCCESS:
      return { ...state, locations: action.locations, loading: false }
    case GET_LOCATIONS_LOADING:
      return { ...state, loading: true }
    case GET_LOCATIONS_FAILURE:
      return { ...state, loading: false, message: action.message }
    case SUBMIT_FORM_ERROR:
      return { ...state, formError: true, formSuccess: false, formSent: true, formMessage: action.msg }
    case SUBMIT_FORM_SUCCESS:
      return { ...state, formSuccess: true, formError: false, formSent: true, formMessage: action.msg }
    case TOGGLE_LOCATION:
      return { ...state, selectedLocation: action.id }
    case ADD_CATEGORY:
      return {
        ...state,
        selectedCategories: [...state.selectedCategories, action.category],
      }
    case REMOVE_CATEGORY:
      let newCategories = [...state.selectedCategories]

      newCategories.splice(
        newCategories.findIndex(category => category.id === action.category.id),
        1
      )

      return { ...state, selectedCategories: newCategories }
    default:
      return state
  }
}
