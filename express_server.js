
 const exp = require('express')

 const app = exp()

 const port = 3000

 app.get('/',(request,response)=> {

   response.send('Hello from Express Server !')

        })


app.listen(port, (err)=> {

   if(err)
    {
   return console.log('Some error has occured',err)
     }

   console.log(`Server is running on port ${port}`)

          })
