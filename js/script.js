const $addBtn = document.querySelector('.add-btn')
const $closeBtn = document.querySelector('.fechar-btn')

const $fade = document.querySelector('#fade')
const $modal = document.querySelector('#modal')

function toggleModal() {
    $fade.classList.toggle('hiden')
    $modal.classList.toggle('hiden')
}

$addBtn.addEventListener('click', toggleModal)
$closeBtn.addEventListener('click', toggleModal)


// [== MODELO ==]
const tempClient = {
    id: '',
    endereco: {
        end: '',
        numero: '',
        apto: '',
        torre: '',
        nomeEd: '',
        bairro: '',
    },
    dados: {
        data: '',
        hora: '',
        ate: '',
        nome: '',
        fone: '',
        cel: '',
        email:'',
        cpf: ''
    },
    pesquisa: {
        conheceu: ''
    },
    pedidos: ''
}
