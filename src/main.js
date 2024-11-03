const app = require('express')();

app.all('*', (req, res) => res.status(200).send('Welcome to AutoDeployTest!'));

app.listen(process.env.PORT ?? 3030, () => console.log('Listening on port ' + (process.env.PORT ?? 3030)));
