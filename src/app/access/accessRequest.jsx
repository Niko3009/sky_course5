import { useEffect } from 'react'

import { useEnterAccountMutation } from 'back/services/signApi'

export const AccessRequestSelector = ({ requestData, accessResponse }) => {
    const [
        enterAccount,
        { data, isUninitialized, isLoading, isSuccess, isError, error },
    ] = useEnterAccountMutation()

    if (isUninitialized) enterAccount(requestData)

    useEffect(() => {
        const responseData = {
            loading: isLoading,
            success: isSuccess,
            error: null,
            data: data,
        }

        if (isError) responseData.error = error.data.detail

        accessResponse(responseData)
    })

    return
}
