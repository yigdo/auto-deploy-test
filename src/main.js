const app = require('express')();

app.all('*', (req, res) => res.status(200).send('Welcome to Auto-Deploy-Test!'));

app.listen(process.env.PORT ?? 3030, () => console.log('Listening on port ' + (process.env.PORT ?? 3030)));
