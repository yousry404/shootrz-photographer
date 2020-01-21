import axios from "axios"
import { baseUrl } from "../../services/api"

// action types
export const CHANGE_EMAIL = "SIGNUP::CHANGE_EMAIL"
export const CHANGE_NAME = "SIGNUP::CHANGE_NAME"
export const CHANGE_PASSWORD = "SIGNUP::CHANGE_PASSWORD"
export const CHANGE_GENDER = "SIGNUP::CHANGE_GENDER"
export const CHANGE_CONFIRM_PASSWORD = "SIGNUP::CHANGE_CONFIRM_PASSWORD"
export const CHANGE_BIRTHDAY = "SIGNUP::CHANGE_BIRTHDAY"
export const CHANGE_GEAR = "SIGNUP::CHANGE_GEAR"
export const CHANGE_PORTFOLIO = "SIGNUP::CHANGE_PORTFOLIO"
export const CHANGE_PHONE = "SIGNUP::CHANGE_PHONE"
export const CHANGE_ERROR = "SIGNUP::CHANGE_ERROR"
export const SUBMIT_FORM_SUCCESS = "SIGNUP::SUBMIT_FORM_SUCCESS"
export const SUBMIT_FORM_ERROR = "SIGNUP::SUBMIT_FORM_ERROR"
export const CHANGE_YEARS = "SIGNUP::CHANGE_YEARS"
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS"
export const GET_CATEGORIES_LOADING = "GET_CATEGORIES_LOADING"
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE"

export const GET_LOCATIONS_SUCCESS = "GET_LOCATIONS_SUCCESS"
export const GET_LOCATIONS_LOADING = "GET_LOCATIONS_LOADING"
export const GET_LOCATIONS_FAILURE = "GET_LOCATIONS_FAILURE"
export const ADD_CATEGORY = "ADD_CATEGORY"
export const REMOVE_CATEGORY = "REMOVE_CATEGORY"
export const TOGGLE_LOCATION = "TOGGLE_LOCATION"
export const changeName = value => {
  return {
    type: CHANGE_NAME,
    value,
  }
}
export const changeEmail = value => {
  return {
    type: CHANGE_EMAIL,
    value,
  }
}

export const changeGender = value => {
  return {
    type: CHANGE_GENDER,
    value,
  }
}
export const changeBirthday = value => {
  return {
    type: CHANGE_BIRTHDAY,
    value,
  }
}
export const changePhone = value => {
  return {
    type: CHANGE_PHONE,
    value,
  }
}
export const changePortfolio = value => {
  return {
    type: CHANGE_PORTFOLIO,
    value,
  }
}
export const changeGears = value => {
  return {
    type: CHANGE_GEAR,
    value,
  }
}
export const changeYears = value => {
  return {
    type: CHANGE_YEARS,
    value,
  }
}

export const changePassword = value => {
  return {
    type: CHANGE_PASSWORD,
    value,
  }
}

export const changeConfirmPassword = value => {
  return {
    type: CHANGE_CONFIRM_PASSWORD,
    value,
  }
}
export const addCategory = category => {
  return {
    type: ADD_CATEGORY,
    category,
  }
}
export const removeCategory = category => {
  return {
    type: REMOVE_CATEGORY,
    category,
  }
}
export const toggleLocation = id => {
  return {
    type: TOGGLE_LOCATION,
    id,
  }
}

export const changeError = (errorType, isError) => ({
  type: CHANGE_ERROR,
  errorType,
  isError,
})

export const submitForm = ({
  name,
  email,
  password,
  selectedCategories,
  selectedLocation: locationId,
  portfolio,
  gears,
  phone,
  gender,
  birthday,
  years
}) => async dispatch => {
  try {
    const response = await axios.post(`${baseUrl}/photographer/signup`, {
      name,
      email,
      password,
      locationId,
      selectedCategories: selectedCategories.map(cat => cat.id),
      portfolio,
      gears,
      phone,
      gender,
      birthday,
      years: parseInt(years)
    })
    const {
      data: { msg },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: SUBMIT_FORM_ERROR, msg })
    } else {
      dispatch({ type: SUBMIT_FORM_SUCCESS, msg })
      // const settingUserPromise = new Promise((resolve, reject) =>
      //   resolve(
      //     setUser(access_token),
      //     localStorage.setItem("photographerName", name)
      //   )
      // )
      // await settingUserPromise
      // navigate("/app/events/")
    }
  } catch (e) {
    if(e.response.status === 400) {
      dispatch({ type: SUBMIT_FORM_ERROR, msg: e.response.data.msg })

    } else {

      dispatch({ type: SUBMIT_FORM_ERROR, msg: "Error in logging in" })
    }
  }
}

export const getCategories = () => async dispatch => {
  try {
    dispatch({ type: GET_CATEGORIES_LOADING })
    const response = await axios.get(`${baseUrl}/categories-photographer`)
    const {
      data: { message, categories },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: GET_CATEGORIES_FAILURE, message })
    } else {
      dispatch({ type: GET_CATEGORIES_SUCCESS, categories })
    }
  } catch (e) {
    dispatch({
      type: GET_CATEGORIES_FAILURE,
      message: "Error in fetching categories",
    })
  }
}

export const getLocations = () => async dispatch => {
  try {
    dispatch({ type: GET_LOCATIONS_LOADING })
    const response = await axios.get(`${baseUrl}/locations`)
    const {
      data: { message, locations },
      status,
    } = response
    if (status !== 200) {
      dispatch({ type: GET_LOCATIONS_FAILURE, message })
    } else {
      dispatch({ type: GET_LOCATIONS_SUCCESS, locations })
    }
  } catch (e) {
    dispatch({
      type: GET_LOCATIONS_FAILURE,
      message: "Error in fetching locations",
    })
  }
}
