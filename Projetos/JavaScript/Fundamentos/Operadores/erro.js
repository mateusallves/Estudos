function imprimirObjeto(obj){
   // throw new Error('....');
   //throw 10
   throw true
   throw 'mensagen'
   throw{
       nome : erro.name,
       msg: erro.mensage,
       date: new Date
   }
   try{ 
       console.log(obj.name.toUpperCase() +'!!!')
     } catch (e){
        tratarError(e)
     } finally {
         console.log('final')
     }
}

const obj = {nome:'Name'}
imprimirObjeto(obj)