import { useEffect, useState } from 'react'

import { useRefreshTokenMutation } from 'back/services/signApi'

export const TokenRefreshTimerSelector = ({ requestData, getResponse }) => {
    const initState = { refreshCount: 0, requestOn: false, responceData: null }
    const [state, setState] = useState(initState)
    const refreshCount = state.refreshCount
    const responceData = state.responceData
    const requestOn = state.requestOn

    const makeRequest = () => {
        state.refreshCount++
        state.requestOn = true
        state.requestData = null
        setState(structuredClone(state))
    }
    const getIntermediaryResponse = ({ loading, success, error, data }) => {
        state.requestOn = false
        state.responceData = { refreshCount, success, error, data }
        if (!loading) setState(structuredClone(state))
    }

    const timerMinuts = 3

    setTimeout(makeRequest, timerMinuts * 60000)

    useEffect(() => {
        const isDataReady = !requestOn && responceData && refreshCount
        if (isDataReady) getResponse(responceData)
    })

    return (
        requestOn && (
            <TokenRefreshSelector
                requestData={requestData}
                getResponse={getIntermediaryResponse}
            />
        )
    )
}

export const TokenRefreshSelector = ({ requestData, getResponse }) => {
    const [
        getToken,
        { data, isUninitialized, isLoading, isSuccess, isError, error },
    ] = useRefreshTokenMutation()

    if (isUninitialized) getToken(requestData)

    useEffect(() => {
        if (!isUninitialized) {
            const responseData = {
                loading: isLoading,
                success: isSuccess,
                error: null,
                data: data,
            }

            if (isError) responseData.error = error.data.detail

            getResponse(responseData)
        }
    })

    return
}
