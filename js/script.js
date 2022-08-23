const $addBtn = document.querySelector('.add-btn')
const $closeBtn = document.querySelector('.fechar-btn')

const $fade = document.querySelector('#fade')
const $modal = document.querySelector('#modal')

const $submitBtn = document.querySelector('#submit-btn')

const $form = document.querySelector('#cadastro-cliente')

function toggleModal() {
    $fade.classList.toggle('hiden')
    $modal.classList.toggle('hiden')
}

//metodos
const getLocalStorage = () =>  JSON.parse(localStorage.getItem('dbClient')) ?? []  
const setLocalStorage = (dbClient) => localStorage.setItem('dbClient', JSON.stringify(dbClient))

//CRUD
function deleteClient(index) {
    const dbClient = getLocalStorage()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

function updateClient(index, client) {
    const dbClient = getLocalStorage()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

function createClient(client) {
    const dbClient = getLocalStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
    console.log(dbClient)     
}

//user
function saveData(event) {
    event.preventDefault()
    console.log('savando dados')
    let client = {
        endereco: document.querySelector('#endereco').value,
        numero: document.querySelector('#numero').value,
        apto: document.querySelector('#apto').value,
        torre: document.querySelector('#torre').value,
        nomeEd: document.querySelector('#nome-ed').value,
        bairro: document.querySelector('#bairro').value,
        data: document.querySelector('#data').value,
        hora: document.querySelector('#hora').value,
        ate: document.querySelector('#ate').value,
        nome: document.querySelector('#nome').value,
        fone: document.querySelector('#fone').value,
        cel: document.querySelector('#cel').value,
        cpf: document.querySelector('#cpf').value,
        email: document.querySelector('#email').value,
        pesquisa: document.querySelector('#pesquisa').value,
        outro: document.querySelector('#outro').value,
        pedido: document.querySelector('#pedido').value,
    }

    createClient(client)
}


//eventos
$addBtn.addEventListener('click', toggleModal)
$closeBtn.addEventListener('click', toggleModal)

$submitBtn.addEventListener('click', saveData)

// [== MODELO ==]
// const tempClient = {
//     id: '',
//     endereco: {
//         end: '',
//         numero: '',
//         apto: '',
//         torre: '',
//         nomeEd: '',
//         bairro: '',
//     },
//     dados: {
//         data: '',
//         hora: '',
//         ate: '',
//         nome: '',
//         fone: '',
//         cel: '',
//         email:'',
//         cpf: ''
//     },
//     pesquisa: {
//         conheceu: ''
//     },
//     pedidos: ''
// }


let tempClient = {
    endereco: 'joao',
    numero: '56',
    apto: '98',
    torre: 'grande',
    nomeEd: 'calrto',
    bairro: 'teste',
    data: 'teste',
    hora: 'teste',
    ate: 'teste',
    nome: 'teste',
    fone: 'teste',
    cel: 'teste',
    cpf: 'teste',
    email:'teste',
    pesquisa: '',
    outro: 'teste mano',
    pedido: 'teste mano',
}