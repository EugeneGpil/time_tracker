import {useErrorStore} from 'stores/error/error.js';

export default async function () {
  if (this.isRegisteringInProgress === true) {
    return;
  }

  this.isRegisteringInProgress = true;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.retypePassword,
    }),
  }

  const response = await fetch(
    'http://api.time-tracker.lc/v1/register',
    options,
  )

  await useErrorStore().setValidationErrors(response, 'register')

  this.isRegisteringInProgress = false;
}
