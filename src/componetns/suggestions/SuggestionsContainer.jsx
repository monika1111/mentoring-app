import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./SuggestionsContainer.scss"

import { SuggestionsList } from "./SuggestionsList";
import { addRegisterSuggestion, removeRegisterSuggestion } from "../../store/auth/authActions";

export const SuggestionsContainer = () => {
    const [showError, setShowError] = useState(false);
    const { suggestions, employeesList} = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const removeSuggestion = useCallback((user) => {
        setShowError(false);

        dispatch(removeRegisterSuggestion(user))
    }, [suggestions])

    const addSuggestion = useCallback((user) => {
        if(suggestions.length !== 5) {
            dispatch(addRegisterSuggestion(user))
        } else {
            setShowError(true);
        }
    }, [suggestions])

    return (
        <div className="suggestions">
            {showError && <div className="suggestions-error">You can add max 5 suggestions!</div>}
            <SuggestionsList
                title="Your Five Suggestions"
                data={suggestions}
                onClick={removeSuggestion}
                actionName="DELETE"
            />
            <SuggestionsList
                title="Employee's List"
                data={employeesList}
                onClick={addSuggestion}
                actionName="ADD"
            />
        </div>
    )
}