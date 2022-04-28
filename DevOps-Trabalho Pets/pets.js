
//////Nome: Brendo William de Souza Faria // Matricula: 20114290065


const data = [
    { id: 1, nome: "Capitu", 
        idade: 15, sexo: "F",
        especie: "Calopsita"
    },

    {
      id: 2, nome: "Bentinho",
        idade: 5, sexo: "M",
        especie: "Cachorro"
    }
];

////////////////////////////////////////////////////


function listar() {
    return data;
}

function listarPorId(id) {
    const pet = data.find(
        pet => pet.id === id
        )


    if(!pet) {
        return {
        erro: true,
        mensagem: "Pet não encontrado!"
        };
    }


    return pet;
}


////////////////////////////////////////////////////


function cadastrar(pet) {
    pet.id = data.length+1;
    

    if(pet.nome === undefined){
        return{
            erro: true,
            mensagem: "Campo 'nome' é obrigatório!"
        };   
    }


    if(pet.idade === undefined){
        return{
            erro: true,
            mensagem: "Campo 'idade' é obrigatório!"
        };
    }



    if(pet.sexo === undefined){
        return{
            erro: true,
            mensagem: "Campo 'sexo' é obrigatório!"
        };
    }



    if(pet.especie === undefined){
        return{
            erro: true,
            mensagem: "Campo 'especie' é obrigatório!"
        };
    }



    if(pet.idade <= 0){
        return{
            erro: true,
            mensagem: "Campo 'idade' deve ser maior ou igual a zero!"
        };
    }



    if(pet.sexo != "M" && pet.sexo != "F"){
        return{
            erro: true,
            mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!"
        };
    }



    data.push(pet)


    return pet;
}


////////////////////////////////////////////////////


function editarPorId(id, pet) {
    const index = data.findIndex(pet => pet.id === id);
    
    if(index === -1)
        return {erro: true, mensagem: "Pet não encontrado!"}
    
            if(pet.nome != undefined){
                data[index].nome = pet.nome;
            }


            if(pet.idade != undefined){
                data[index].idade = pet.idade;

                if(pet.idade < 0){
                    return{
                        erro: true,
                        mensagem: "Campo 'idade' deve ser maior ou igual a zero!"
                    };
                }
        
             }


    if(pet.sexo != undefined){
        data[index].sexo = pet.sexo; 
        if(pet.sexo !== "M" && pet.sexo !== "F"){
            return{
                erro: true,
                mensagem: "Campo 'sexo' deve ser 'M' ou 'F'!"
            };
        }
         
    }

    if(pet.especie != undefined){
        data[index].especie = pet.especie;
    }

    return data[index];


}


////////////////////////////////////////////////////
   

function deletarPorId(id) {
    const index = data.findIndex(pet => pet.id === id);
    data.splice(index, 1)
    
    if(index === -1) 
    return {
        erro: true, 
        mensagem: "Pet não encontrado!"
        }
    
    
    
   return{
    erro: false,
    mensagem: "Pet deletado com sucesso!"
   }; 
}

module.exports = {
    listar,
    listarPorId,
    cadastrar,
    editarPorId,
    deletarPorId
}