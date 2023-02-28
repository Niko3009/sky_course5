import { useEffect } from 'react'

import { useGetTokenMutation } from 'back/services/signApi'

export const TokenRequestSelector = ({ requestData, getResponse }) => {
    const [
        getToken,
        { data, isUninitialized, isLoading, isSuccess, isError, error },
    ] = useGetTokenMutation()

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
    }, [data])

    return
}
