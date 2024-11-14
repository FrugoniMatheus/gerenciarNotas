
document.getElementById("submit").addEventListener("click", function(){

    let mdNtAluno = parseFloat(document.getElementById("mediaNt").value)

    let qtDeAluno = parseFloat(document.getElementById("qtAlunos").value)

    let ntAlunos = [];

    let ntAlunosPassaram = [];

    let ntAlunosNPassaram = [];

    function orgNtAlunos(qt){

        for(let i = 1; i <= qt; i++ ){
            let ntInforme = Number(prompt(`Qual a nota do ${i} Aluno?`));
            ntAlunos.push(ntInforme)
        }
        
    }

    orgNtAlunos(qtDeAluno)

    function dspAlunos(nt, media){
        let qtNotasAlunos = nt.length
        for(let i = 0; i < qtNotasAlunos; i ++){
            if (media <= ntAlunos[i]){
                ntAlunosPassaram.push(ntAlunos[i])
            } else{
                ntAlunosNPassaram.push(ntAlunos[i])
            }
        }
    }

    dspAlunos(ntAlunos, mdNtAluno);

    let gerarSection = document.getElementById("teste")
    gerarSection.innerHTML = ""

    let newParagraph = document.getElementById("new")

    newParagraph.innerHTML = `<p>Os alunos que passaram foram com as notas ${ntAlunosPassaram} e aqueles que não passaram ficaram com as notas ${ntAlunosNPassaram}</p>`
})

