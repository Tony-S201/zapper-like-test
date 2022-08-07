const MORALIS_APP_ID = process.env.VUE_APP_MORALIS_APP_ID;
const MORALIS_KEY = process.env.VUE_APP_MORALIS_KEY;
const MOLARIS_SERVER_URL = process.env.VUE_APP_MOLARIS_SERVER_URL;

const MoralisFactory = (function() {
    const Moralis = require('moralis');

    function MoralisInstance() {
        /* Moralis.initialize(
            applicationId,
            javascriptKey,
        );

        Moralis.serverURL = url; */

        const serverUrl = MOLARIS_SERVER_URL;
        const appId = MORALIS_APP_ID;
        Moralis.start({ serverUrl, appId });

        return Moralis;
    }

    let instance = null;

    return {
        getInstance: function() {
            if (instance == null) {
                instance = MoralisInstance(MORALIS_APP_ID, MORALIS_KEY, MOLARIS_SERVER_URL);
                instance.constructor = null;
            }
            return instance;
        },
    };
})();

export default MoralisFactory;