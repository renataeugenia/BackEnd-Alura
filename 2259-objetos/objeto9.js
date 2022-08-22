// sintaxe de espalhamento => (SPREAD OPERATOR ...) - lista de dependentes : 

const clientes = [
    {

        nome:"Antonio de Toledo",
        cpf:"1274569813",
        dependentes: [
            {
         nome:"Maria Izabel Fernandes de Toledo",
         parentesco:"filha",
         dataNasc:"25/10/1999"
          },

         {
            nome:"Luis Antonio Fernandes de Toledo",
            parentesco:"filho",
            dataNasc:"05/06/2001"
            },
         {
                nome:"Helena Fernandes de Toledo",
                parentesco:"filha",
                dataNasc:"13/08/2004"
            },   
        ],
     },
     {
         nome:"Bernardo Abuzamra",
         cpf:"4563217893",
         dependentes: [
            {
          nome:"Felipe Damasceno Abuzamra",
          parentesco:"filho",
          dataNasc:"25/10/2019"  
     
        },
            {
          nome:"Anna Beatriz Damasceno Abuzamra",
          parentesco:"filha",
          dataNasc:"02/03/2021"
        }
    ],
     }
     
];

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDependentes);

    




