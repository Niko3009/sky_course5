import { useRef, useEffect } from 'react'

import {
    PrevBtn,
    PlayBtn,
    NextBtn,
    RepeatBtn,
    ShuffleBtn,
    NoteIcon,
    LikeBtn,
    VolumeIcon,
    VolumeBar,
} from './controlBlock/controlElements'

export const ControlBlock = ({ track, playerSetting, playerControl }) => {
    const volumeRef = useRef()

    const playStatus = playerSetting.playStatus
    const volumeLevel = playerSetting.volumeLevel
    const repeatStatus = playerSetting.repeatStatus

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

    const switchRepeatStatus = () =>
        playerControl.setRepeatStatus(!playerSetting.repeatStatus)

    let volume
    useEffect(() => {
        volume = volumeRef.current
    })

    return (
        <div className="bar__player-block">
            {track && (
                <div>
                    <div className="bar__player player">
                        <div className="player__controls">
                            <PrevBtn />

                            <PlayBtn
                                onElmClick={playerControl.switchPlayback}
                                activity={playStatus}
                            />

                            <NextBtn />

                            <RepeatBtn
                                onElmClick={switchRepeatStatus}
                                activity={repeatStatus}
                            />

                            <ShuffleBtn />
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
                                <LikeBtn name={'like'} />
                                <LikeBtn name={'dislike'} />
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
            )}
        </div>
    )
}
