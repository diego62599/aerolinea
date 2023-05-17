const express =require ('express')
const app= express()
const path =require('path')
const hbs=require('hbs')


const puerto =2023

//servidor con contenido estatico
app.use(express.static('public'))

//Configuracion del directorio de las vistas hbs
app.set('views',path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//configuracion del directorio que guardara los archivos partials hbs
hbs.registerPartials(__dirname+'/public/views/partials');



app.get ('/',(req,res)=>{
    res.render('disponibilidad',
    {
        titulo:'Aerolinea',
        nombre:'Diego Betancur'

    })
    
})


app.listen(puerto,()=>{
    console.log(`Escuchando por el puerto ${puerto}`)

})