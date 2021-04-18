
/**
 * Get the current user info from localStorage
 *
 * @return Object
 */
export function getCurrentUserInfo () {
	const user = localStorage.getItem('current_user');
	return user && JSON.parse(user);
}

/**
 * Save the current user info to localStorage
 *
 * @param Object
 * @return void
 */
export function setCurrentUserInfo (data) {
	localStorage.setItem('current_user', JSON.stringify(data));
}
