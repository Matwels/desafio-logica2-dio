let saldoVitorias = saldoRankeadas(45, 4);
let nivelPersonagem;


function saldoRankeadas (vitorias, derrotas){
    let resultado = vitorias - derrotas;
    return resultado;
}

if (saldoVitorias <= 10) {
    nivelPersonagem = "Ferro";
    
} else {
    if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivelPersonagem = "Bronze";
    } else {
        if (saldoVitorias >= 21 && saldoVitorias <= 50) {
            nivelPersonagem = "Prata";
      
        } else {
            if (saldoVitorias >= 51 && saldoVitorias <= 80) {
                nivelPersonagem = "Ouro";
            } else {
                if (saldoVitorias >= 81 && saldoVitorias <= 90) {
                    nivelPersonagem = "Diamante";
                } else {
                    if (saldoVitorias >= 91 && saldoVitorias <= 100) {
                        nivelPersonagem = "Lendário";
                    } else {
                        if (saldoVitorias >= 101) {
                            nivelPersonagem = "Imortal";
                        }
                        
                    }
                    
                }
                
            }
            
        }
    }
    
}
console.log("O Herói tem de saldo de " +saldoVitorias+ " vitórias e está no nível " +nivelPersonagem);