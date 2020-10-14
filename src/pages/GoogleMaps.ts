import BasePage from 'src/pages/BasePage';

class GoogleMaps extends BasePage {

    
    get latitude() {
        // return $('#latitude');
        return $("[id='latitude']");
    }

    get logitude() {
        // return $('#longitude');
        return $("[id='longitude']");
    }

    get submitButton() {
        // return $('#submit');

        return $("[id='submit']");
    }
}

export default new GoogleMaps();