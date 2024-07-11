import '../component/nav-kage.js';
import KageData from '../data/kage-data.js';
import '../component/kage-list.js';

const mainKage = () => {
    const searchKage = document.querySelector('nav-kage');
    const kageList = document.querySelector('kage-list');

    const onButtonSearchEvent = async () => {
        try {
            const result = await KageData.searchEvent(searchKage.value);
            renderResultEvent(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResultEvent = results => {
        kageList.kages = results;
    };

    const fallbackResult = message => {
        kageList.renderError(message);
    };

    searchKage.clickEvent = onButtonSearchEvent;
};

export default mainKage;