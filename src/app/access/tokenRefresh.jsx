import { useEffect, useState } from 'react'

import { useRefreshTokenMutation } from 'back/services/signApi'

export const TokenRefreshTimerSelector = ({
    requestData,
    responseReceiver,
}) => {
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
    const getIntermediaryResponse = ({ isLoading, isSuccess, error, data }) => {
        state.requestOn = false
        state.responceData = { refreshCount, isSuccess, error, data }
        if (!isLoading) setState(structuredClone(state))
    }

    const timerMinuts = 3
    setTimeout(makeRequest, timerMinuts * 60000)

    useEffect(() => {
        if (refreshCount === 0) makeRequest()
        const isDataReady = !requestOn && responceData // && refreshCount
        if (isDataReady) responseReceiver(responceData)
    })

    return (
        requestOn && (
            <TokenRefreshSelector
                requestData={requestData}
                responseReceiver={getIntermediaryResponse}
            />
        )
    )
}

export const TokenRefreshSelector = ({ requestData, responseReceiver }) => {
    const [
        getToken,
        { data, isUninitialized, isLoading, isSuccess, isError, error },
    ] = useRefreshTokenMutation()

    if (isUninitialized) getToken(requestData)

    useEffect(() => {
        if (!isUninitialized) {
            const responseData = {
                isLoading,
                isSuccess,
                error: null,
                data,
            }

            if (isError) responseData.error = error.data.detail

            responseReceiver(responseData)
        }
    })

    return
}
