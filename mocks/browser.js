
import { handlers } from './handlers';

let mswWorker;

export const setupMswWorker = async () => {
    if (typeof window !== 'undefined' && !mswWorker) {
        const { setupWorker } = await import('msw/browser');
        mswWorker = setupWorker(...handlers);
        console.log("from setupMswWorker", mswWorker);
        return mswWorker;
    }
};