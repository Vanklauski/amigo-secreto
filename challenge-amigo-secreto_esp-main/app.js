let amigos =[];

function agregarAmigo()
{
    let nuevoAmigo = document.getElementById('amigo').value;

    if (nuevoAmigo == '')
    {
        alert ('Agregue un nombre valido')
    }
    else {
    amigos.push(nuevoAmigo);
    console.log(amigos);
    limpiarEntrada();
    }
}

function limpiarEntrada()
{
  let valorEntrada = document.getElementById('amigo')
  valorEntrada.value = '';
} 