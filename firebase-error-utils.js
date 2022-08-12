const ErrorCodeToFriendlyMessages = {
  'auth/invalid-phone-number': 'Please provide a valid phone number',
  'auth/invalid-verification-code': 'Please check the code entered and try again',
  'auth/code-expired': 'You have timed-out or too many unsuccessful tries. Please try again later',
  'auth/too-many-requests': 'Too many attempts. Please try again later',
}

export const getErrorMessageFromCode = (code) => {
  return ErrorCodeToFriendlyMessages[code] || 'Unexpected Error occurred: ' + code
}
