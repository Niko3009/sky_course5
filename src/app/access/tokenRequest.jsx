import { useEffect } from 'react'

import { useGetTokenMutation } from 'back/services/signApi'

export const TokenRequestSelector = ({
    requestData,
    responseReceiver,
    isRequestActivated,
}) => {
    const intermediateResponseReceiver = function ({
        data,
        isLoading,
        isSuccess,
        error,
    }) {
        const requestName = 'Token Request'
        if (!isLoading) {
            if (!isSuccess) console.error(requestName, 'ERROR:', error)
            responseReceiver({ data, isSuccess, error })
        }
    }

    if (!isRequestActivated) return
    else
        return (
            <RequestSelector
                requestData={requestData}
                responseReceiver={intermediateResponseReceiver}
            />
        )
}

const RequestSelector = ({ requestData, responseReceiver }) => {
    const [
        getToken,
        { data, isUninitialized, isLoading, isSuccess, isError, error },
    ] = useGetTokenMutation()

    if (isUninitialized) getToken(requestData)

    useEffect(() => {
        if (!isUninitialized) {
            const responseData = { data, isLoading, isSuccess, error: null }
            if (isError) responseData.error = error.data.detail
            responseReceiver(responseData)
        }
    }, [data])

    return
}
