
import { handlers } from './handlers';
//
// import { setupWorker } from 'msw/browser'


//export const worker = setupWorker(...handlers);


let mswWorker;

export const setupMswWorker = async () => {
    if (typeof window !== 'undefined' && !mswWorker) {
        const { setupWorker } = await import('msw/browser');
        mswWorker = setupWorker(...handlers);
        console.log("from setupMswWorker", mswWorker);
        return mswWorker;
    }
};