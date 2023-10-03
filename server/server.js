import express from 'express';
import cors from 'cors';
// const cors = require('cors')
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
// const express = require('express');
// const { Configuration, OpenAIApi } = require("openai");
import { Configuration, OpenAIApi } from "openai";
// require('dotenv').config();
import dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
    apiKey: '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',
    // apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const textGeneration = async (prompt) => {

    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Human: ${prompt}\nAI: `,
            temperature: 0.9,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            stop: ['Human:', 'AI:']
        });
    
        return {
            status: 1,
            response: `${response.data.choices[0].text}`
        };
    } catch (error) {
        return {
            status: 0,
            response: ''
        };
    }
};

const app = express();
app.use(express.json({limit: '50mb'}));

/** middlewares */
// app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

// const webApp = express();

// const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Path ${req.path} with Method ${req.method}`);
    next();
});


const port = 5000;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

app.post('/dialogflow', async (req, res) => {
    
    let action = req.body.queryResult.action;
    let queryText = req.body.queryResult.queryText;

    if (action === 'input.unknown') {
        let result = await textGeneration(queryText);
        if (result.status == 1) {
            res.send(
                {
                    fulfillmentText: result.response
                }
            );
        } else {
            res.send(
                {
                    fulfillmentText: `Sorry, I'm not able to help with that.`
                }
            );
        }
    } else {
        res.send(
            {
                fulfillmentText: `No handler for the action ${action}.`
            }
        );
    }
});


/** api routes */
app.use('/api', router)

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})








// import express from 'express';
// import cors from 'cors';
// // const cors = require('cors')
// import morgan from 'morgan';
// import connect from './database/conn.js';
// import router from './router/route.js';

// const app = express();
// app.use(express.json({limit: '50mb'}));

// /** middlewares */
// app.use(express.json());
// app.use(cors());
// app.use(morgan('tiny'));
// app.disable('x-powered-by'); // less hackers know about our stack


// const port = 5000;

// /** HTTP GET Request */
// app.get('/', (req, res) => {
//     res.status(201).json("Home GET Request");
// });


// /** api routes */
// app.use('/api', router)

// /** start server only when we have valid connection */
// connect().then(() => {
//     try {
//         app.listen(port, () => {
//             console.log(`Server connected to http://localhost:${port}`);
//         })
//     } catch (error) {
//         console.log('Cannot connect to the server')
//     }
// }).catch(error => {
//     console.log("Invalid database connection...!");
// })

