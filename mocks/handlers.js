import { graphql } from 'msw';

const patients = [
    { "rc": "671007/1690", "birth": "07.10.1997", "name": "Jan Barta", "age": 57, "condition": "indeterminate", "mris": [{ "date": "10.11.2024", "scan": "/img/mri/mri1.webp", "condition": "indeterminate" }] },
    { "rc": "601010/1220", "birth": "10.10.1960", "name": "Ales Cerny", "age": 64, "condition": "Tumor", "mris": [{ "date": "15.11.2024", "scan": "/img/mri/mri1.webp", "condition": "Tumor" }, { "date": "10.08.2024", "scan": "/img/mri/mri1.webp", "condition": "indeterminate" }] },
    { "rc": "540505/1234", "birth": "05.05.1954", "name": "Petr Levy", "age": 70, "condition": "Alzheimer’s disease", "mris": [{ "date": "15.11.2024", "scan": "/img/mri/mri1.webp", "condition": "Alzheimer’s disease" }] },
    { "rc": "640505/4321", "birth": "05.05.1964", "name": "Anna Spurna", "age": 80, "condition": "Stroke", "mris": [{ "date": "10.02.2024", "scan": "/img/mri/mri1.webp", "condition": "Stroke" }] }
];

export const handlers = [
    graphql.query('GetAllPersons', (req, res, ctx) => {
        console.log('GetAllPersons request received');
        console.log('Request:', req);
        console.log('Response Function:', res);
        console.log('Context:', ctx);
        if (!ctx) {
            console.error('ctx is undefined');
            return;
        }
        return res(
            ctx.data({
                persons: patients
            })
        );
    }),

    graphql.query('GetPersonByRC', (req, res, ctx) => {
        const { rc } = req.variables;
        console.log('GetPersonByRC request received with rc:', rc);
        if (!ctx) {
            console.error('ctx is undefined');
            return;
        }
        const person = patients.find(patient => patient.rc === rc);
        if (!person) {
            return res(
                ctx.errors([{ message: `Person with rc ${rc} not found` }])
            );
        }
        return res(
            ctx.data({
                person
            })
        );
    }),
];
