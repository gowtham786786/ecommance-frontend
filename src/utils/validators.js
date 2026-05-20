export function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validatePassword(value) {
  return value?.length >= 6;
}

export function validateRequired(value) {
  return value?.toString().trim().length > 0;
}

export function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}
