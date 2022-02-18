function loadCommits() {
    // Try it with Fetch API
    let username = document.getElementById('username');
    let repo = document.getElementById('repo');
    let commits = document.getElementById('commits');

    getRequest();

    async function getRequest() {
        try {
            let response = await fetch(`https://api.github.com/repos/${username.value}/${repo.value}/commits`);
            if (response.ok == false) {
                throw new Error(`Error: ${response.status} (Not Found)`)
            }
            const data = await response.text();
            let parseData = JSON.parse(data);
            let ul = document.createElement('ul');
            ul.id = 'commits'

            for (const line of Object.values(parseData)) {
                let li = document.createElement('li');
                console.log(line);
                li.textContent = `${line.commit.author.name}: ${line.commit.message}`;
                ul.appendChild(li)
            }

            commits.appendChild(ul);

        } catch (error) {
           return error
        }
    }

    

}