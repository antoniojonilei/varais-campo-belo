const $addBtn = document.querySelector('.add-btn')
const $closeBtn = document.querySelector('.fechar-btn')

const $pdfButton = document.querySelector('#js-pdf')

const $fade = document.querySelector('#fade')
const $modal = document.querySelector('#modal')

const $submitBtn = document.querySelector('#submit-btn')

const $form = document.querySelector('#cadastro-cliente')

const $mainContent = document.querySelector('#main-content')


let $endereco = document.querySelector('#endereco')
let $numero = document.querySelector('#numero')
let $apto = document.querySelector('#apto')
let $torre = document.querySelector('#torre')
let $nomeEd = document.querySelector('#nome-ed')
let $bairro = document.querySelector('#bairro')
let $data = document.querySelector('#data')
let $hora = document.querySelector('#hora')
let $ate = document.querySelector('#ate')
let $nome = document.querySelector('#nome')
let $fone = document.querySelector('#fone')
let $cel = document.querySelector('#cel')
let $cpf = document.querySelector('#cpf')
let $email = document.querySelector('#email')
let $pesquisa = document.querySelector('#pesquisa')
let $outro = document.querySelector('#outro')
let $pedido = document.querySelector('#pedido')



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
    $pedido.value = ''
    // console.log(field)
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

    const index = document.querySelector('#endereco', '#numero', '#apto', '#torre', '#nome-ed', '#bairro', '#data', '#hora', '#ate', '#nome', '#fone', '#cel', '#cpf', '#email', '#pesquisa', '#outro', '#pedido').dataset.index

    if(index == 'new') {
        createClient(client)
        clearForm()
        loadPage()
        toggleModal()
    } else {
        // console.log('Botão ...... Editando......')
        updateClient(index, client)
        loadPage()
        toggleModal()
    }

    
}

function addNewClient(client, index) {
    const newClientRow = document.createElement('div')
    newClientRow.classList.add('table-items')
    newClientRow.innerHTML = `

    <p class="client-title">Nome: ${client.nome}
    <button type="button" class"pdf-btn" id="js-pdf-${index}">
        <i class="fa-solid fa-download"></i>        
    </button>        
    </p>        
    
    <table>
        <tr class="table-header">
            <td colspan="2" class="table-header-data">Endereço</td>
            <td class="table-header-data">Número</td>
            <td class="table-header-data">Apto</td>
            <td class="table-header-data">Torre</td>
            <td class="table-header-data">Nome Ed</td>
              
        </tr>
        <tr class="class="table-item">
            <td colspan="2" class="table-item-data">${client.endereco}</td>
            <td class="table-item-data">${client.numero}</td>
            <td class="table-item-data">${client.apto}</td>
            <td class="table-item-data">${client.torre}</td>
            <td class="table-item-data">${client.nomeEd}</td>
                    
        </tr>
        <tr class="table-header">
        <td class="table-header-data">Bairro</td>
            <td class="table-header-data">Data</td>
            <td class="table-header-data">Hora</td>
            <td class="table-header-data">Ate</td>
            
            
            <td class="table-header-data">Fone</td>
            <td class="table-header-data">Cel</td>
        </tr>
        <tr class="class="table-item">
            <td class="table-item-data">${client.bairro}</td> 

            <td class="table-item-data">${client.data}</td>
            <td class="table-item-data">${client.hora}</td>
            <td class="table-item-data">${client.ate}</td>
            
            <td class="table-item-data">${client.fone}</td>
            <td class="table-item-data">${client.cel}</td>         
        </tr>
        <tr class="table-header">
            <td colspan="2" class="table-header-data">E-mail</td>
            <td class="table-header-data">CPF</td>
            <td class="table-header-data">Pesquisa</td>
            <td class="table-header-data">Outro</td>
            
            <td class="table-header-data">Ação</td>
        </tr>
        <tr class="class="table-item">
            <td colspan="2" class="table-item-data">${client.email}</td>
            <td class="table-item-data">${client.cpf}</td>
            <td class="table-item-data">${client.pesquisa}</td>
            <td class="table-item-data">${client.outro}</td>            
            <td class="table-item-data">
                <div class="action-btn">
                    <button type="button" class="edit-btn" id="edit-${index}">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button type="button" class="trash-btn" id="delete-${index}">
                        <i class="fa-solid fa-trash"></i>                    
                    </button>                   
                </div>
            </td>                    
        </tr>
        <tr class="table-header">
            <td colspan="6" class="table-header-data">Pedidos</td>
        </tr>
        <tr class="class="table-item">
            <td colspan="6" class="table-item-data pedidos">${client.pedido}</td>
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
    console.log(client)
}

function editClient(index) {
    const client = getLocalStorage()[index]
    client.index = index
    updateFillClient(client)
    toggleModal()
    // console.log(client)

    $endereco.value = client.endereco
    $numero.value = client.numero
    $apto.value = client.apto
    $torre.value = client.torre
    $nomeEd.value = client.nomeEd
    $bairro.value = client.bairro
    $data.value = client.data
    $hora.value = client.hora
    $ate.value = client.ate
    $nome.value = client.nome
    $fone.value = client.fone
    $cel.value = client.cel
    $cpf.value = client.cpf
    $email.value = client.email
    $pesquisa.value = client.pesquisa
    $outro.value = client.outro
    $pedido.value = client.pedido

    $endereco.dataset.index = client.index
    $numero.dataset.index = client.index
    $apto.dataset.index = client.index
    $torre.dataset.index = client.index
    $nomeEd.dataset.index = client.index
    $bairro.dataset.index = client.index
    $data.dataset.index = client.index
    $hora.dataset.index = client.index
    $ate.dataset.index = client.index
    $nome.dataset.index = client.index
    $fone.dataset.index = client.index
    $cel.dataset.index = client.index
    $cpf.dataset.index = client.index
    $email.dataset.index = client.index
    $pesquisa.dataset.index = client.index
    $outro.dataset.index = client.index
    $pedido.dataset.index = client.index    
    
}

function updateDeleteClient(event) {
    if(event.target.type == 'button') {
        const [ action, index ] = event.target.id.split('-')
        
        if(action == 'edit') {
            // console.log('editando')
            editClient(index)
            
        }else if(action == 'delete'){
            const client = getLocalStorage()[index]
            const response = confirm(`Excluir o cliente ${client.nome}`)

            if(response) {
                console.log('excluindo')
                deleteClient(index)
                loadPage()
            }            
        }else{
            console.log('gerar pdf')
        }          
        
    }    
}

function createPdf() {
    console.log('gerar pdf')
}

loadPage()

//eventos
$addBtn.addEventListener('click', toggleModal)
$closeBtn.addEventListener('click', toggleModal)

$submitBtn.addEventListener('click', saveData)

$mainContent.addEventListener('click', updateDeleteClient)