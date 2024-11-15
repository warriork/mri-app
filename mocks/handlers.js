import { graphql } from 'msw';
import patients from '../data/patients.json';

export const handlers = [
    graphql.query('GetAllPatients', (req, res, ctx) => {
        return res(ctx.data({ persons: patients }));
    }),

    graphql.query('GetPatientByRC', (req, res, ctx) => {
        const { rc } = req.variables;
        const person = patients.find(person => person.rc === rc);
        return res(ctx.data({ person }));
    }),
];