// URL da API do GitHub de informações sobre o último commit
const apiUrl = 'https://api.github.com/repos/guilherm-hsbe/Portfolio/commits/main';

// Buscar a data do último commit
async function fetchLastCommitDate() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const commitDate = new Date(data.commit.committer.date);
        const formattedDate = commitDate.toLocaleDateString();
        document.getElementById('last-commit-date').textContent = formattedDate;
    } catch (error) {
        console.error('(erro ao buscar o último commit:', error, ')');
        document.getElementById('last-commit-date').textContent = '(erro ao buscar a data do último commit.)';
    }
}

fetchLastCommitDate();