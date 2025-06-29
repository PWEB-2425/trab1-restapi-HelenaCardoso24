// Função para adicionar aluno
const apiUrl =  "http://localhost:3000/alunos";

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