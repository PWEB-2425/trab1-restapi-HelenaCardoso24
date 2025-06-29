// Função para listar alunos
const apiUrl =  "http://localhost:3000/alunos";

async function fetchAlunos() {
    const resposta = await fetch(apiUrl);
    const alunos = await resposta.json();

    const lista = document.getElementById('tabela');
   // lista.innerHTML = '';

    alunos.forEach(aluno => {
    const item = document.createElement('tr');
    //item.textContent = `${aluno.nome} ${aluno.apelido} - ${aluno.curso} - ${aluno.idade} anos - Ano ${aluno.AnoCurricular}`;
    item.innerHTML = `
                    <td>${aluno.nome}</td>
                    <td>${aluno.apelido}</td>
                    <td>${aluno.idade}</td>
                    <td>${aluno.anoEscolar}</td>
                    <td>${aluno.curso}</td>
                `;


    const btnRemover = document.createElement('button');
    btnRemover.setAttribute("data-alunoid", aluno._id);
    btnRemover.textContent = 'Remover';
    btnRemover.onclick = () => removerAluno(aluno._id);

    item.appendChild(btnRemover);
    lista.appendChild(item);
    });
}



// Função para remover aluno
async function removerAluno(id) {
await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE'
    });
fetchAlunos();
}

// Carrega a lista ao abrir a página
fetchAlunos();