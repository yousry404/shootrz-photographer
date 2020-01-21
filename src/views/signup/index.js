import React, { useEffect } from "react"

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import InputLabel from "@material-ui/core/InputLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"

// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers"
// import DateFnsUtils from "@date-io/date-fns"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {
  changeName,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  submitForm,
  getCategories,
  getLocations,
  addCategory,
  removeCategory,
  toggleLocation,
  changeGender,
  changeBirthday,
  changeError,
  changePhone,
  changeGears,
  changePortfolio,
  changeYears
} from "./actions"
import "./styles.scss"
function Signup({
  email,
  password,
  name,
  confirmPassword,
  changeName,
  changeEmail,
  changePassword,
  changeConfirmPassword,
  changeGender,
  changeBirthday,
  changePortfolio,
  changePhone,
  changeGears,
  changeError,
  submitForm,
  getLocations,
  getCategories,
  categories,
  selectedCategories,
  locations,
  addCategory,
  removeCategory,
  selectedLocation,
  gender,
  birthday,
  phone,
  portfolio,
  gears,
  toggleLocation,
  emailError,
  nameError,
  passwordError,
  confirmPasswordError,
  genderError,
  birthdayError,
  phoneError,
  selectedCategoriesError,
  locationError,
  gearsError,
  portfolioError,
  years,
  yearsError,
  changeYears,
  formSuccess,
    formError,
    formSent,
    formMessage
}) {
  useEffect(() => {
    getLocations()
    getCategories()
  }, [])
  const handleChangeName = e => {
    changeError("name", false)
    changeName(e.target.value)
  }
  const handleChangeEmail = e => {
    changeError("email", false)
    changeEmail(e.target.value)
  }
  const handleChangePassword = e => {
    changeError("password", false)
    changePassword(e.target.value)
  }
  const handleChangePhone = e => {
    changeError("phone", false)

    changePhone(e.target.value)
  }
  const handleChangeYears = e => {
    changeError("years", false)

    changeYears(e.target.value)
  }
  const handleChangePortfolio = e => {
    changeError("portfolio", false)
    changePortfolio(e.target.value)
  }
  const handleChangeGears = e => {
    changeError("gears", false)
    changeGears(e.target.value)
  }

  const handleChangeConfirmPassword = e => {
    changeError("confirmPassword", false)
    changeConfirmPassword(e.target.value)
  }
  const handleSignup = () => {
    !name && changeError("name", true)
    !email.match(new RegExp(/\S+@\S+\.\S+/))  && changeError("email", true)
    password.length < 8 && changeError("password", true)
    !confirmPassword && changeError("confirmPassword", true)
    password !== confirmPassword && changeError("confirmPassword", true)
    selectedCategories.length < 1 && changeError("category", true)
    !selectedLocation && changeError("location", true)
    !birthday && changeError("birthday", true)
    !gender && changeError("gender", true)
    !portfolio && changeError("portfolio", true)
    !phone && changeError("phone", true)
    !gears && changeError("gears", true)
    !years && changeError("years", true)

    if (
      !(
        !name ||
        !email.match(new RegExp(/\S+@\S+\.\S+/)) ||
        password.length < 8 ||
        !confirmPassword ||
        password !== confirmPassword ||
        selectedCategories.length < 1 ||
        !selectedLocation ||
        !phone ||
        !portfolio ||
        !gears ||
        !gender ||
        !years
      )
    ) {
      submitForm({
        name,
        email,
        password,
        selectedLocation,
        selectedCategories,
        portfolio,
        gears,
        phone,
        gender,
        birthday,
        years
      })
    }
  }
  const handleAddCategory = category => {
    changeError("category", false)
    addCategory(category)
  }
  const handleRemoveCategory = category => {
    removeCategory(category)
  }
  const handleToggleLocation = e => {
    changeError("location", false)
    toggleLocation(e.target.value)
  }
  const handleChangeGender = ({ target: { value } }) => {
    changeError("gender", false)
    changeGender(value)
  }
  const handleBirthdayChange = ({ target: { value } }) => {
    changeError("birthday", false)
    changeBirthday(value)
  }
  return (
    <div className="signup-form">
      <div className="form-container signup-form__items">
        <FormControl error={nameError}>
          <TextField
            required
            id="outlined-basic"
            label="Name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={handleChangeName}
            error={nameError}
          />
          {nameError && (
            <FormHelperText>Please enter your name.</FormHelperText>
          )}
        </FormControl>
        <FormControl error={emailError}>
          <TextField
            required
            id="outlined-basic"
            label="Email"
            margin="normal"
            variant="outlined"
            value={email}
            onChange={handleChangeEmail}
            error={emailError}
          />

          {emailError && (
            <FormHelperText>Please enter a valid email.</FormHelperText>
          )}
        </FormControl>
        <FormControl error={passwordError}>
          <TextField
            required
            id="outlined-basic"
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={handleChangePassword}
            error={passwordError}
          />
          {passwordError && (
            <FormHelperText>Please enter your password, and make sure it's more than 8 characters.</FormHelperText>
          )}
        </FormControl>
        <FormControl error={confirmPasswordError}>
          <TextField
            required
            id="outlined-basic"
            label="Confirm password"
            margin="normal"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            error={confirmPasswordError}
          />
          {confirmPasswordError && (
            <FormHelperText>Please confirm your password, and make sure it matches your password.</FormHelperText>
          )}
        </FormControl>
        <FormControl error={yearsError}>
          <TextField
            required
            id="outlined-basic"
            label="Years of Experience"
            margin="normal"
            variant="outlined"
            type="number"
            value={years}
            onChange={handleChangeYears}
            error={yearsError}
          />
          {yearsError && (
            <FormHelperText>Please enter your years of experience.</FormHelperText>
          )}
        </FormControl>
        <FormControl error={phoneError}>
          <TextField
            required
            id="outlined-basic"
            label="Phone Number"
            margin="normal"
            variant="outlined"
            type="number"
            value={phone}
            onChange={handleChangePhone}
            error={phoneError}
          />
          {phoneError && (
            <FormHelperText>Please enter your phone number.</FormHelperText>
          )}
        </FormControl>
        <FormControl error={portfolioError}>
          <TextField
            required
            id="outlined-basic"
            label="Add a link to your portfolio"
            margin="normal"
            variant="outlined"
            value={portfolio}
            onChange={handleChangePortfolio}
            error={portfolioError}
          />
          {portfolioError && (
            <FormHelperText>
              Please provide a link for your portfolio.
            </FormHelperText>
          )}
        </FormControl>
        <FormControl error={gearsError}>
          <TextField
            required
            id="outlined-basic"
            label="List the gears you have"
            margin="normal"
            variant="outlined"
            value={gears}
            onChange={handleChangeGears}
            error={gearsError}
          />
          {gearsError && (
            <FormHelperText>Please list all Gears you have.</FormHelperText>
          )}
        </FormControl>
        <FormControl error={genderError} className="mb-4">
          <InputLabel required>Gender</InputLabel>
          <Select value={gender} onChange={handleChangeGender}>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          {genderError && (
            <FormHelperText>Please select your gender.</FormHelperText>
          )}
        </FormControl>

        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={birthday}
          onChange={handleBirthdayChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        </MuiPickersUtilsProvider> */}
        <InputLabel>Birthday</InputLabel>
        <FormControl error={birthdayError}>
          <TextField
            id="date"
            type="date"
            // defaultValue="2017-05-24"
            value={birthday}
            onChange={handleBirthdayChange}
          />
          {birthdayError && (
            <FormHelperText>Please enter your birthday.</FormHelperText>
          )}
        </FormControl>
        <InputLabel className="mt-3" required>Choose Categories you work in</InputLabel>
        <FormControl error={false}>
          <div className="signup-form__categories">
            {categories.map(category =>
              selectedCategories.find(cat => cat.id === category.id) ? (
                <div
                  key={category.id}
                  className="signup-form__category selected"
                  onClick={() => handleRemoveCategory(category)}
                >
                  {category.name}
                </div>
              ) : (
                <div
                  key={category.id}
                  className="signup-form__category"
                  onClick={() => handleAddCategory(category)}
                >
                  {category.name}
                </div>
              )
            )}
          </div>
          <div className="signup-form__selected-categories">
            <p>
              {selectedCategories.map((cat, index) =>
                index !== selectedCategories.length - 1
                  ? cat.name + ", "
                  : cat.name + "."
              )}
            </p>
          </div>
        </FormControl>
        <FormControl error={locationError} className="mb-4">
          <InputLabel required>Choose your location</InputLabel>
          <Select value={selectedLocation} onChange={handleToggleLocation} error={locationError}>
            {locations.map(location => (
              <MenuItem value={location.id} key={location.id}>
                {location.name}
              </MenuItem>
            ))}
          </Select>
          {locationError && (
            <FormHelperText>Please enter your location.</FormHelperText>
          )}
        </FormControl>
        <Button variant="contained" onClick={handleSignup}>
          Register
        </Button>
        {formSent && formSuccess && <p>We've received your application and will contact you shortly</p>}
        {formSent && formError && <FormHelperText error>{formMessage}</FormHelperText>}
      </div>
    </div>
  )
}

const mapStateToProps = ({
  signup: {
    name,
    email,
    password,
    confirmPassword,
    gender,
    birthday,
    phone,
    portfolio,
    gears,
    categories,
    selectedCategories,
    locations,
    selectedLocation,
    emailError,
    nameError,
    passwordError,
    confirmPasswordError,
    genderError,
    birthdayError,
    selectedCategoriesError,
    locationError,
    selectedLocationError,
    phoneError,
    portfolioError,
    gearsError,
    years,
    yearsError,
    formSuccess,
    formError,
    formSent,
    formMessage
  },
}) => {
  return {
    name,
    email,
    password,
    confirmPassword,
    birthday,
    gender,
    categories,
    selectedCategories,
    locations,
    selectedLocation,
    phone,
    portfolio,
    gears,
    emailError,
    nameError,
    passwordError,
    confirmPasswordError,
    genderError,
    birthdayError,
    selectedCategoriesError,
    locationError,
    selectedLocationError,
    phoneError,
    portfolioError,
    gearsError,
    years,
    yearsError,
    formSuccess,
    formError,
    formSent,
    formMessage
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeName,
      changeEmail,
      changePassword,
      changeConfirmPassword,
      changeGender,
      changeBirthday,
      changeGears,
      changePhone,
      changePortfolio,
      submitForm,
      getCategories,
      getLocations,
      addCategory,
      removeCategory,
      toggleLocation,
      changeError,
      changeYears
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
