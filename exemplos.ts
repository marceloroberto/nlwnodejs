
interface DadosDeEnvioEmail{
    para: string,
    id: string,
    assunto: string,
    texto: string
}

function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail){
    console.log(para, id, assunto, texto);
}

class EnviarEmailparaUsuario{
    send(){
        enviarEmail({
            para: "marcelo@teste.com.br", 
            id: "9899", 
            assunto: "Olá", 
            texto: "Tudo bem?"
        })
    }
}