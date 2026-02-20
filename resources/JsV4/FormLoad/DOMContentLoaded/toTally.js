let StartFunc = async () => {
    try {
        const LocalBodyData = await LocalFuncFromXml();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(LocalBodyData, "text/xml");

        const config = {
            method: 'POST',
            body: LocalBodyData
        };

        let jVarLocalResponse = await fetch("http://localhost:9000/", config);

        return await jVarLocalResponse;
    } catch (error) {
        return await false;
    };
};

const LocalFuncFromXml = async () => {
    // Fetch XML file
    const response = await fetch("./import.xml");
    let xmlText = await response.text();
    // debugger;
    const LocalReplacedText = xmlText.replaceAll("KSCutomerName", "A S Varma, Tallarevu");

    return LocalReplacedText;
};

export { StartFunc };