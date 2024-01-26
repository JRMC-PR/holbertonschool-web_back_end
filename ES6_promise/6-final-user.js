import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}

// import  signUpUser  from './4-user-promise';
// import  uploadPhoto  from './5-photo-reject';

// export default function handleProfileSignup(firstname, lastname, filename) {
//   return Promise.all([uploadPhoto(filename), signUpUser(firstname, lastname)])
//     .then((value) => ({ status: 'success', value }), (error) => ({ status: 'error', error }));
// }
