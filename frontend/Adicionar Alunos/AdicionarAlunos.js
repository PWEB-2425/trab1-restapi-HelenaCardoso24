// Função para adicionar aluno
const apiUrl =  "https://trab1-restapi-helenacardoso24.onrender.com/alunos";

document.getElementById('btnAdd').addEventListener('click', async (e) => {
            e.preventDefault();

            const novoAluno = {
                nome: (document.getElementById('InputNome').value),
                apelido: (document.getElementById('InputApelido').value),
                curso: (document.getElementById('InputCurso').value),
                idade: (document.getElementById('InputIdade').value),
                AnoCurricular: (document.getElementById('InputAnoCurricular').value)
            };

            alunoJS = JSON.stringify(novoAluno)
            console.log(alunoJS)

            await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: alunoJS
            });

            // Atualiza a lista depois de adicionar
            ///fetchAlunos();
            document.getElementById('alunoForm').reset();
        });

// função para atualizar dados do aluno
const params = new URLSearchParams(window.location.search);
const IDaluno = params.get('id');

window.onload = async function()  {
    if(IDaluno != null){
        const aluno ={}

        aluno._id = IDaluno

        const res = await fetch(`${apiUrl}/id/${IDaluno}`,{method:'GET'})
        const alunosRes = await res.json()

        console.log(alunosRes)

        document.getElementById("name").value= alunosRes[0].nome ;
        document.getElementById("apelido").value=alunosRes[0].apelido;
        document.getElementById("idade").value=alunosRes[0].idade ;
        document.getElementById("curso").value=alunosRes[0].curso;
        document.getElementById("AnoCurricular").value=alunosRes[0].AnoCurricular;
    }
};

const btnAdd = document.getElementById("btnAdd")
btnAdd.addEventListener("click", criarAlunos)


async function criarAlunos() {

    console.log(IDaluno)

    const alunos = {}

        alunos.nome = document.getElementById("nome").value;
        alunos.apelido = document.getElementById("apelido").value;
        alunos.idade = document.getElementById("idade").value;
        alunos.curso = document.getElementById("curso").value;
        alunos.AnoCurricular = document.getElementById("AnoCurricular").value;

        console.log(alunos);

        alunos_json= JSON.stringify(alunos)

        console.log(alunos_json)

    if(IDaluno == null){

        if(alunos.curso != "" && alunos.nome != "" && alunos.apelido != "" && alunos.idade != "" && alunos.AnoCurricular != ""){
            const resposta = await fetch(apiUrl, {method: "POST",headers: { 'Content-Type': 'application/json' }, body: alunos_json})
        }
    }else{
        //alunos._id =studentId;
        const resposta = await fetch(`${apiUrl}/${IDaluno}`, {method: "PUT",headers: { 'Content-Type': 'application/json' }, body: alunos_json})
    } 
}