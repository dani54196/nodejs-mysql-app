const express = require ('express');
const morgan = require ('morgan');

//initializations
const app = express();

//setting
app.set('port', process.env.PORT || 4000);

//middleweares
app.use(morgan('dev'));

//Global Variables

//Routes
app.use(require('./routes/'))
//Public

//Starting server
app.listen(app.get('port'), () =>{
  console.log(`Server on port ${app.get('port')}`)
}
)