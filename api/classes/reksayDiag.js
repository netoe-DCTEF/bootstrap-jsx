export default class APIModuleError {
    APIError(text, suggest) {
        if (text && !suggest) {
            console.error(`ReaksayAPI:Error->${text.toString()}`);
            return;
        }

        if (text && suggest) {
            console.error(`ReaksayAPI:Error->${text.toString()}\nSuggestionFix:${suggest.toString()} `);
        }
        return console.error("Internal Error in APIERRORDIAG");
    }

    APIWarning(text, suggest) {
        if (text && !suggest) {
            console.warn(`ReaksayAPI:Error->${text.toString()}`);
            return;
        }

        if (text && suggest) {
            console.warn(`ReaksayAPI:Error->${text.toString()}\nSuggestionFix:${suggest.toString()} `);
        }
        return console.warn("Internal Error in APIERRORDIAG");
    }

    APILog(text, suggest) {
        if (text && !suggest) {
            console.log(`ReaksayAPI:Error->${text.toString()}`);
            return;
        }

        if (text && suggest) {
            console.log(`ReaksayAPI:Error->${text.toString()}\nSuggestionFix:${suggest.toString()} `);
        }
        return console.log("Internal Error in APIERRORDIAG");
    }
};