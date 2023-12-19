//quero selecionar o elemento do formulário, que no caso é o id do form

const formulario = document.getElementById("formulario");
//agora, preciso adicionar um evento, acessando o formulario com o elemento submit para prevenir o comportamento padrão do formulário 
formulario.addEventListener("submit", function(event){

    event.preventDefault();
    //agora, tenho que selecionar o elemento de sucesso da mensagem
    const mensagem = document.getElementById("mensagem");
    //agora, vou selecionar os valores dos campos
    const nome = document.querySelector("#nome");

    const fone = document.querySelector("#fone");
    const email = document.querySelector("#email");

    
    const observacao = document.querySelector("#observacao");
    
    const rejexFone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    const rejexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
if(nome && fone && email && observacao){
    if(rejexFone.test(fone)){
        if(rejexEmail.test(email)){
            mensagem.innerHTML = `O usuário ${nome} foi cadastrado com sucesso! 
            <br>                       
          Telefone: ${fone}
          <br>
          email: ${email}
          <br>
          observação: ${observacao}`;

        } else {
            mensagem.innerHTML = "o email informado é inválido";
        }
    } else {
        mensagem.innerHTML = "o telefone informado é inválido";
    }
} else {
    mensagem.innerHTML = "todos os campos são obrigatórios"
}
});