let StartFunc = async () => {
    try {
        let jVarLocalUrl = "Tally/xml/SelectCompany/Masters/Items/WithGroups.xml";

        let jVarLocalResponse = await fetch(jVarLocalUrl);

        if (jVarLocalResponse.status === 200) {
            return await jVarLocalResponse.text();
        };
    } catch (error) {
        return await error;
    };
};

export { StartFunc };