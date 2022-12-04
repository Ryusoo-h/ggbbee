
import { AnyObject } from './type';
import App from './app';

declare global {
    interface Window {
        Handlebars: {
            compile: (template: string) => (data: AnyObject) => string;
            precompile: (template: string) => (data: AnyObject) => string;
        },
    }
}

const app = new App('#root', {
    title: '가즈아앙'
});

app.render();

