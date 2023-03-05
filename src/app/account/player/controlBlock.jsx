import { useRef, useEffect } from 'react'

import {
    PrevBtn,
    PlayBtn,
    NextBtn,
    RepeatBtn,
    ShuffleBtn,
    NoteIcon,
    VolumeIcon,
    VolumeBar,
} from './controlBlock/controlElements'
import { LikeBtn } from './controlBlock/likeBtn'

export const ControlBlock = ({ track, playerSetting, playerControl }) => {
    const volumeRef = useRef()

    const playStatus = playerSetting.playStatus
    const volumeLevel = playerSetting.volumeLevel
    const repeatStatus = playerSetting.repeatStatus
    const shuffleStatus = playerSetting.shuffleStatus

    const switchPlay = () => playerControl.switchPlay()
    const switchPrevTrack = () => playerControl.switchTrack('prev')
    const switchNextTrack = () => playerControl.switchTrack('next')
    const switchRepeatStatus = () =>
        playerControl.setRepeatStatus(!repeatStatus)
    const switchShuffleStatus = () =>
        playerControl.setShuffleStatus(!shuffleStatus)

    let volume
    const volumeControl = {
        switch: (newVolume) =>
            playerControl.setVolumeLevel(
                newVolume !== undefined ? newVolume : volume.value
            ),
        mute: () => {
            volume.value = 0
            volumeControl.switch(0)
        },
    }
    useEffect(() => {
        volume = volumeRef.current
    })

    if (track)
        return (
            <div className="bar__player-block">
                <div>
                    <div className="bar__player player">
                        <div className="player__controls">
                            <PrevBtn onElmClick={switchPrevTrack} />

                            <PlayBtn
                                onElmClick={switchPlay}
                                activity={playStatus}
                            />

                            <NextBtn onElmClick={switchNextTrack} />

                            <RepeatBtn
                                onElmClick={switchRepeatStatus}
                                activity={repeatStatus}
                            />

                            <ShuffleBtn
                                onElmClick={switchShuffleStatus}
                                activity={shuffleStatus}
                            />
                        </div>

                        <div className="player__track-play track-play">
                            <div className="track-play__contain">
                                <NoteIcon />

                                <a className="track-play__author-link" href="#">
                                    {track.author}
                                </a>

                                <a className="track-play__album-link" href="#">
                                    {track.name}
                                </a>
                            </div>

                            <div className="track-play__like-dis">
                                <LikeBtn name={'like'} track={track} />
                                {/* <LikeBtn name={'dislike'} /> */}
                            </div>
                        </div>
                    </div>

                    <div className="bar__volume-block volume volume__content">
                        <VolumeIcon onElmClick={volumeControl.mute} />
                        <VolumeBar
                            volumeRef={volumeRef}
                            volumeLevel={volumeLevel}
                            switchVolume={volumeControl.switch}
                        />
                    </div>
                </div>
            </div>
        )
}
