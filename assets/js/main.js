$("#enviarCorreo").on("click",function(){
    alert("Correo enviado exitosamente")
})

$("h3").on("dblclick",()=>{
    console.log(this)
    this.css("color","red")
})