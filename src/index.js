import app from './app';
import './database';

// port used
app.set('port', process.env.PORT || 3030);
app.listen(app.get('port'));
console.log(`server on port`, app.get('port'));