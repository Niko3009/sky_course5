import { useGetAllFavorsQuery } from 'back/services/signApi'

import { useAddLikeMutation } from 'back/services/signApi'
import { useDelLikeMutation } from 'back/services/signApi'

export const LikeBtn = ({ name, track }) => {
    if (!track) return
    track = track ? JSON.parse(JSON.stringify(track)) : {}

    const { data: favorsData, isSuccess } = useGetAllFavorsQuery()
    let favors = favorsData ? JSON.parse(JSON.stringify(favorsData)) : {}
    if (isSuccess) track = markFavors(favors, track)

    const isItLike = track.like
    const useLikeMutation = isItLike ? useDelLikeMutation : useAddLikeMutation
    const [likeMutation] = useLikeMutation()

    const trackId = track.id
    const requestData = { trackId }
    const changeLike = () => likeMutation(requestData)

    if (isSuccess)
        return (
            <div className={`track-play__${name} _btn-icon`}>
                <svg
                    className={`track-play__${name}-svg`}
                    alt={name}
                    onClick={changeLike}
                    style={isItLike ? { stroke: 'red', fill: 'red' } : {}}
                >
                    <use xlinkHref={`/img/icon/sprite.svg#icon-${name}`}></use>
                </svg>
            </div>
        )
}

const markFavors = (favors, track) => {
    let favorsIds = []
    const isFavorite = (track) => favorsIds.includes(track.id)
    Object.keys(favors).forEach((N) => favorsIds.push(favors[N].id))
    track.like = isFavorite(track)
    return track
}
