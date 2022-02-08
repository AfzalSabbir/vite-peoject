import VButton                 from "./components/VButton.vue";
import ShowErrorMessages       from "./components/ShowErrorMessages.vue";
import {camelCase, upperFirst} from 'lodash';

const requiredComponents = require.context(
    './components',
    true,
    /Base[A-Z]\w+\.(vue)$/,
);

export default {
    install: (app, options) => {
        requiredComponents.keys().forEach(fileName => {
            const componentConfig = requiredComponents(fileName);

            const componentName = upperFirst(
                camelCase(
                    fileName
                        .split('/')
                        .pop()
                        .replace(/\.\w+$/, ''),
                ),
            );
            app.component(componentName, componentConfig.default || componentConfig);
        });

        app.component('ShowErrorMessages', ShowErrorMessages);
        app.component('VButton', VButton);
    },
};