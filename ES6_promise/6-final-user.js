import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  return Promise.all([signUpUser(firstname, lastname), uploadPhoto(filename)])
    .then((value) => ({ status: 'fulfilled', value }), (error) => ({ status: 'rejected', error }));
}
