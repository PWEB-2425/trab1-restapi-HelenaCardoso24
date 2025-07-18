// Função para listar alunos
const apiUrl =  "https://trab1-restapi-helenacardoso24.onrender.com/alunos";
//const apiUrl ="http://localhost:3000/alunos"

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
                    <td>${aluno.AnoCurricular}</td>
                    <td>${aluno.curso}</td>

                    <td> <button><a href="../Adicionar Alunos/AdicionarAlunos.html?id=${aluno._id}">Atualiza dados</a></button></td>
                `;


    const btnRemover = document.createElement('button');
    btnRemover.setAttribute("data-alunoid", aluno._id);
    btnRemover.textContent = 'Remover';
    btnRemover.onclick = () => removerAluno(aluno._id);

    item.appendChild(btnRemover);
    lista.appendChild(item);
    });
}

//procura o aluno
const btnProcura = document.getElementById('procurar');
btnProcura.addEventListener ("click", procurarAluno);

async function procurarAluno() {
   const id = document.getElementById('barrinhaDePesquisa').value ;
   const info = await fetch(`${apiUrl}/${id}`,{method: `GET`});

   const aluno =await info.json();

   console.log(aluno);

   const lista = document.getElementById('tabela');
   // lista.innerHTML = '';

    
    const item = document.createElement('tr');
    //item.textContent = `${aluno.nome} ${aluno.apelido} - ${aluno.curso} - ${aluno.idade} anos - Ano ${aluno.AnoCurricular}`;
    item.innerHTML = `
                    <td>${aluno[0].nome}</td>
                    <td>${aluno[0].apelido}</td>
                    <td>${aluno[0].idade}</td>
                    <td>${aluno[0].AnoCurricular}</td>
                    <td>${aluno[0].curso}</td>
                `;


    const btnProcura = document.createElement('button');
    btnProcura.setAttribute("data-alunoid", aluno._id);
    btnProcura.textContent = 'Remover';
    btnProcura.onclick = () => removerAluno(aluno._id);


    item.appendChild(btnProcura);
    lista.appendChild(item);
    ;
}


// Função para remover aluno
async function removerAluno(id) {
await fetch(`${apiUrl}/${id}`, {method: 'DELETE'});
fetchAlunos();
}

// Carrega a lista ao abrir a página
fetchAlunos();