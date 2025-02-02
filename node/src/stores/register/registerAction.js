export default async function () {
  if (this.isRegisteringInProgress === true) {
    return;
  }

  this.isRegisteringInProgress = true;

  setTimeout(() => {
    this.isRegisteringInProgress = false;
  }, 3000)

  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     name: this.name,
  //     email: this.email,
  //     password: this.password,
  //     password_confirmation: this.retypePassword,
  //   }),
  // }
  //
  // const response = await fetch(
  //   'http://api.time-tracker.lc/v1/register',
  //   options,
  // )
  //
  // console.log(response)
  //
  // this.isRegisteringInProgress = false;
}
