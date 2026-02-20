let StartFunc = async ({ inXmlPath }) => {
    try {
        let jVarLocalUrl = inXmlPath;

        let jVarLocalResponse = await fetch(jVarLocalUrl);

        if (jVarLocalResponse.status === 200) {
            return await jVarLocalResponse.text();
        };
    } catch (error) {
        return await error;
    };
};

export { StartFunc };