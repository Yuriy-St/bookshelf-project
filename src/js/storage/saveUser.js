export function saveSession(userData) {
  try {
    if (userData) {
      localStorage.setItem('currentUser', JSON.stringify(userData));
    }
  } catch (err) {
    throw err;
  }
}

export function getUserSession() {
  try {
    const userSession = localStorage.getItem('currentUser');
    return userSession ? JSON.parse(userSession) : null;
  } catch (err) {
    throw err;
  }
}

export function removeSession() {
  try {
    localStorage.removeItem('currentUser');
    return true;
  } catch (err) {
    throw err;
  }
}
