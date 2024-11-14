
document.getElementById("submit").addEventListener("click", function(){

    let mdNtAluno = parseFloat(document.getElementById("mediaNt").value)

    let qtDeAluno = parseFloat(document.getElementById("qtAlunos").value)

    let refNt = 0

    let ntAlunos = [];

    let ntAlunosPassaram = [];

    let ntAlunosNPassaram = [];

    if (mdNtAluno <= 7){
        refNt = 10
    } else{
        refNt = 100
    }

    function orgNtAlunos(qt){
        for(let i = 1; i <= qt; i++ ){
            let ntInforme = Number(prompt(`Qual a nota do ${i} Aluno?`));
            while (isNaN(ntInforme) || ntInforme > refNt){
                if(isNaN(ntInforme)){
                    alert("Digite somente números")
                    ntInforme = Number(prompt(`Qual a nota do ${i} Aluno?`));
                } else if(refNt === 10){
                    alert("Digite número até 10")
                    ntInforme = Number(prompt(`Qual a nota do ${i} Aluno?`));
                } else if(refNt === 100){
                    alert("Digite número até 100")
                    ntInforme = Number(prompt(`Qual a nota do ${i} Aluno?`));
                }else{
                    
                }
            }
            ntAlunos.push(ntInforme)
        }
    }

    //function validarNt(nt){
    //    alert("Digite somente números")
    //   ntInforme = Number(prompt(`Qual a nota do ${i} Aluno?`));
    //}


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

    newParagraph.innerHTML = `<p>Os alunos que passaram foram com as notas <strong>(${ntAlunosPassaram})</strong><br>Os alunos que não passaram foram com as notas <strong>(${ntAlunosNPassaram})</strong></p>`
})

