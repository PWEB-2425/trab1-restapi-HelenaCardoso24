const BotaoAdicionar= document.getElementById("btnAdd")
BotaoAdicionar.addEventListener("click", AdicionarAlunos)

listarAlunos()
//Função para adicionar alunos a bd.json
async function AdicionarAlunos() {
    const url = "http://localhost:3000/alunos";

    const alunos = {}

    alunos.nome =           document.getElementById("InputNome").value;
    alunos.apelido =        document.getElementById("InputApelido").value;
    alunos.idade =          document.getElementById("InputIdade").value;
    alunos.curso =          document.getElementById("InputCurso").value;
    alunos.AnoCurricular =  document.getElementById("InputAnoCurricular").value;

    console.log(alunos);

    alunos_json= JSON.stringify(alunos)

    
        const resposta = await fetch(url, {method: "POST", body: alunos_json})

    
    listarAlunos();
}

//Função para listar os alunos numa tabela
async function listarAlunos() {
    const url = "http://localhost:3000/alunos";
    
    const resposta = await fetch(url);
    console.log(resposta);

    const alunosJS = await resposta.json();
    console.log(alunosJS);

    let listaAlunos = document.getElementById("tabela");
    console.log(listaAlunos);
    //listaAlunos.innerHTML = "";

    for (aluno of alunosJS) {

        let novob = document.createElement("button");
        novob.setAttribute("data-alunoid", aluno.id);
        novob.innerHTML = "remover";
        novob.addEventListener("click", ApagarAluno);  //botão para apagar os alunos

         const tr = document.createElement('tr');

                tr.innerHTML = `
                    <td>${aluno.nome}</td>
                    <td>${aluno.apelido}</td>
                    <td>${aluno.idade}</td>
                    <td>${aluno.anoEscolar}</td>
                    <td>${aluno.curso}</td>
                    <td><button onclick="removerAluno('${aluno._id}')">Remover</button></td>
                `;

                listaAlunos.appendChild(tr);

        listaAlunos.appendChild(novob);
        listaAlunos.appendChild(tr);
        
    }
}

async function ApagarAluno(evento) {
    
    const botaoclicado = evento.target;
    const idaluno = botaoclicado.dataset.alunoid;
    url = "http://localhost:3000/alunos/" + idaluno;
    const resposta = await fetch(url, { method: "DELETE" });
    listarAlunos();
}