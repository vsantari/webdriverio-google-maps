import fs from 'fs-extra';


export default class BasePage {

    constructor() {
    }

    get marker() {
        return $("[title='marker']");
    }

    get dismissButton() {
        return $('button*=OK');
    }

   

   
}
