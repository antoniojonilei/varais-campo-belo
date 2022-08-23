const $addBtn = document.querySelector('.add-btn')
const $closeBtn = document.querySelector('.fechar-btn')

const $fade = document.querySelector('#fade')
const $modal = document.querySelector('#modal')

const $submitBtn = document.querySelector('#submit-btn')

const $form = document.querySelector('#cadastro-cliente')

const $mainContent = document.querySelector('#main-content')

function toggleModal() {
    clearForm()
    $fade.classList.toggle('hiden')
    $modal.classList.toggle('hiden')
}

//metodos
const getLocalStorage = () => JSON.parse(localStorage.getItem('dbClient')) ?? []
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
function clearForm() {
    const field = document.querySelectorAll('input')
    console.log(field)
    field.forEach((field) => {
        field.value = ""
    })
}

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
        pedido: document.querySelector('#pedido').value
    }

    createClient(client)
    clearForm()
    loadPage()
    toggleModal()
}

function addNewClient(client, index) {
    const newClientRow = document.createElement('div')
    newClientRow.classList.add('table-items')
    newClientRow.innerHTML = `

    <p class="client-title">Cliente: ${client.nome}</p>
    <table>
        <tr class="table-header">
            <td class="table-header-data">Endereço</td>
            <td class="table-header-data">Número</td>
            <td class="table-header-data">Apto</td>
            <td class="table-header-data">Torre</td>
            <td class="table-header-data">Nome Ed</td>
            <td class="table-header-data">Bairro</td>  
        </tr>
        <tr class="class="table-item"">
            <td class="table-item-data">${client.endereco}</td>
            <td class="table-item-data">${client.numero}</td>
            <td class="table-item-data">${client.apto}</td>
            <td class="table-item-data">${client.torre}</td>
            <td class="table-item-data">${client.nomeEd}</td>
            <td class="table-item-data">${client.bairro}</td>         
        </tr>
        <tr class="table-header">
            <td class="table-header-data">Data</td>
            <td class="table-header-data">Hora</td>
            <td class="table-header-data">Ate</td>
            <td class="table-header-data">Nome</td>
            <td class="table-header-data">Fone</td>
            <td class="table-header-data">Cel</td>
        </tr>
        <tr class="class="table-item"">
            <td class="table-item-data">${client.data}</td>
            <td class="table-item-data">${client.hora}</td>
            <td class="table-item-data">${client.ate}</td>
            <td class="table-item-data">${client.nome}</td>
            <td class="table-item-data">${client.fone}</td>
            <td class="table-item-data">${client.cel}</td>         
        </tr>
        <tr class="table-header">
            <td class="table-header-data">E-mail</td>
            <td class="table-header-data">CPF</td>
            <td class="table-header-data">Pesquisa</td>
            <td class="table-header-data">Outro</td>
            <td class="table-header-data">Pedidos</td>
            <td class="table-header-data">Ação</td>
        </tr>
        <tr class="class="table-item"">
            <td class="table-item-data">${client.email}</td>
            <td class="table-item-data">${client.cpf}</td>
            <td class="table-item-data">${client.pesquisa}</td>
            <td class="table-item-data">${client.outro}</td>
            <td class="table-item-data">${client.pedido}</td>
            <td class="table-item-data">
                <div class="action-btn">
                    <button type="button" class="edit-btn" id="edit-${index}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button type="button" class="trash-btn" id="delete-${index}">
                        <i class="fa-solid fa-trash">
                    </i>
                </div>
            </td>                    
        </tr>
    </table>
    
    `

    document.querySelector('#main-content').appendChild(newClientRow)
}

function clearTable() {
    const items = document.querySelectorAll('.table-items')
    items.forEach((item) => {
        item.parentNode.removeChild(item)
    })
}

function loadPage() {
    const dbClient = getLocalStorage()
    clearTable()
    dbClient.forEach(addNewClient)
}

function updateFillClient(client) {
    document.querySelector('#endereco').value = client.endereco
    document.querySelector('#numero').value = client.numero
    document.querySelector('#apto').value = client.apto
    document.querySelector('#torre').value = client.torre
    document.querySelector('#nome-ed').value = client.nomeEd
    document.querySelector('#bairro').value = client.bairro
    document.querySelector('#data').value = client.data
    document.querySelector('#hora').value = client.hora
    document.querySelector('#ate').value = client.ate
    document.querySelector('#nome').value = client.nome
    document.querySelector('#fone').value = client.fone
    document.querySelector('#cel').value = client.cel
    document.querySelector('#cpf').value = client.cpf
    document.querySelector('#email').value = client.email
    document.querySelector('#pesquisa').value = client.pesquisa
    document.querySelector('#outro').value = client.outro
    document.querySelector('#pedido').value = client.pedido
}

function editClient(index) {
    const client = getLocalStorage()[index]
    updateFillClient(client)
    toggleModal()
    // console.log(client)
}

function updateDeleteClient(event) {
    if(event.target.type == 'button') {
        const [ action, index ] = event.target.id.split('-')
        
        if(action == 'edit') {
            console.log('editando')
            editClient(index)
        } else {
            console.log('excluindo')
        }
    }
    
}

loadPage()

//eventos
$addBtn.addEventListener('click', toggleModal)
$closeBtn.addEventListener('click', toggleModal)

$submitBtn.addEventListener('click', saveData)

$mainContent.addEventListener('click', updateDeleteClient)

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


// let tempClient = {
//     endereco: 'joao',
//     numero: '56',
//     apto: '98',
//     torre: 'grande',
//     nomeEd: 'calrto',
//     bairro: 'teste',
//     data: 'teste',
//     hora: 'teste',
//     ate: 'teste',
//     nome: 'teste',
//     fone: 'teste',
//     cel: 'teste',
//     cpf: 'teste',
//     email:'teste',
//     pesquisa: '',
//     outro: 'teste mano',
//     pedido: 'teste mano',
// }