import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export function handleProfileSignup(firstname, lastname, filename) {
  return Promise.all([uploadPhoto(filename), signUpUser(firstname, lastname)])
  .then(value => ({status: 'success', value: value}), error => ({status: 'error', error: error}))
}
