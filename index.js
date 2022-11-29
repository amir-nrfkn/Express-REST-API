const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() );

app.get(
    '/launch',
    (req, res) => {
        res.status(200).send({
            rocket: '🚀',
            provider: 'SpaceX',
            vehicle: 'Falcon 9'
        })
    }
);

app.post(
    '/launch/:mission',
    (req, res) => {
        const { mission } = req.params;
        const { t_minus } = req.body;

        if (!t_minus) {
            res.status(418).send({ message: 'we need a t_minus!'})
        }

        res.send({
            liftoff: `Liftoff in T-${t_minus} for ${mission}`
        })
    }
    );

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)