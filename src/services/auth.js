export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("photographerToken")
    ? JSON.parse(window.localStorage.getItem("photographerToken"))
    : null

export const setUser = user =>
  window.localStorage.setItem("photographerToken", JSON.stringify(user))



export const isLoggedIn = () => {
  const user = getUser()
  return !!user
}

export const logout = callback => {
  setUser({})
  callback()
}