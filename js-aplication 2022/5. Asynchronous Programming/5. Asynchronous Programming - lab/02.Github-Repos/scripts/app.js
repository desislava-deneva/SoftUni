function loadRepos() {
	let username = document.querySelector('input').value
	let url = `https://api.github.com/users/${username}/repos`;
	let repos = document.getElementById('repos');

	fetch(url)
		.then(res => {
			if (res.ok == false) {
				throw new Error(`${res.status} ${res.statusText}`)
			}

			return res.json();
		})
		.then(handleResponse)
		.catch(handleError)

	function handleResponse(data) {
		repos.innerHTML = '';
		data.forEach(repo => {
			let liEl = document.createElement('li');
			liEl.innerHTML = `<a href="${repo.html_url}">${repo.full_name}</a>`
			repos.appendChild(liEl);
		});
	}

	function handleError(error) {
		repos.innerHTML = '';
		repos.innerHTML = `${error.message}`;
	}
}