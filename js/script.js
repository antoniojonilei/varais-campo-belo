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

$addBtn.addEventListener('click', toggleModal)
$closeBtn.addEventListener('click', toggleModal)

$submitBtn.addEventListener('click', function(event) {
    event.preventDefault()

    console.log('submit form')
    toggleModal()
})




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
