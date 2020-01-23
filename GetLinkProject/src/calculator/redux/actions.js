const ACTION_UPDATE_RESULT = '[CALCULATOR] ACTION_UPDATE_RESULT'
const updateResult = (payload) => {
    return {
        type: ACTION_UPDATE_RESULT,
        payload,
    }
}

export {

    ACTION_UPDATE_RESULT,
    updateResult

}