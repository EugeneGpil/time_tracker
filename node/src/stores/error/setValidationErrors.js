export default async function (response, prefix) {
  if (response.status !== 422) {
    return;
  }

  const body = await response.json()

  this.validationErrors[prefix] = body.errors
}
