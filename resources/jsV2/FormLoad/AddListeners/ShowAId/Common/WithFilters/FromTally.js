let StartFunc = async () => {
    try {
        let jVarLocalXml = await LocalFuncReadXml();

        const config = {
            method: 'POST',
            body: jVarLocalXml
        };

        let jVarLocalResponse = await fetch("http://localhost:9000/", config);

        return await jVarLocalResponse;
    } catch (error) {
        return await false;
    };
};

let LocalFuncReadXml = async () => {
    try {
        let jVarLocalUrl = "Tally/xml/SelectCompany/Masters/Ledgers/Simple.xml";
        let jVarLocalResponse = await fetch(jVarLocalUrl);

        if (jVarLocalResponse.status === 200) {
            return await jVarLocalResponse.text();
        };
    } catch (error) {
        return await error;
    };
};

export { StartFunc };