import { useEffect } from 'react'

import { useEnterAccountMutation } from 'back/services/signApi'

export const AccessRequestSelector = ({
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
        const requestName = 'Access Request'
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
        enterAccount,
        { data, isUninitialized, isLoading, isSuccess, isError, error },
    ] = useEnterAccountMutation()

    if (isUninitialized) enterAccount(requestData)

    useEffect(() => {
        if (!isUninitialized) {
            const responseData = { data, isLoading, isSuccess, error: null }
            if (isError) responseData.error = error.data.detail
            responseReceiver(responseData)
        }
    })

    return
}
