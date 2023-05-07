
//pesquisar um conteudo e depois apenas no local especifico mudar esse conteudo = app.querySelector('main').innerHTML = 'muda'

const monthes = ['Jan','Fev','Marc','Abr','May','Jun','Jul','Aug','Set','Oct','Nov','Dez']

function render()
{
    let output = ''


    //verificando qual o mes do ano
    const thismonth = monthes[new Date().getMonth()]


    //para mes de meses
    for(let month of monthes)
    {
        //verificando em qual mes esta e add a class active
        const active = thismonth == month ? 'active' : ''

        // output = output + '<div>' + mes + '</div>'
        //reduzio o codigo com += e esta fazendo um interpolação(tudo qeue estiver ${dentro aqui ele substitui})
        // output += `<div>${month}</div>`
        output += `<div class="${active}">${month}</div>`
    }


    return output
}

app.querySelector('main').innerHTML = render()

//colocando um ano dentro da tag span

app.querySelector('header span').innerHTML = new Date().getFullYear()
