import {createContext, FC, ReactNode, useContext, useRef, useState} from "react";


interface PlayItemVo {
    title: string;
    cover: string;
    src: string;
}

interface PlayerContextType {
    createPlayList: (list: PlayItemVo[]) => void;
    play: () => void;
    pause: () => void;
    stop: () => void;
    next: () => void;
    prev: () => void;
}

const PlayerContext = createContext<PlayerContextType | null>(null);
export const usePlayer = () => useContext(PlayerContext);
export const PlayerProvider: FC<{ children?: ReactNode | undefined }> = props => {
    const [playList, setPlayList] = useState<PlayItemVo[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const player = useRef<HTMLAudioElement | null>(null);
    const play = () => {
        player.current?.play();
    };
    const pause = () => {
        player.current?.pause();
    };
    const stop = () => {
        player.current?.pause();
       //player.current?.currentTime = 0;
    };
    const next = () => {
        if (currentIndex < playList.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const createPlayList = (list: PlayItemVo[]) => {
        setPlayList(list);
        setCurrentIndex(0);
        console.log(list)
       /* sleep(500).then(()=>{
            // @ts-ignore
            player.current?.src = list[0].src;
            player.current?.load();
            player.current?.play();
            player.current?.addEventListener('ended', () => {
                next();
            });
            player.current?.addEventListener('error', () => {
                next();
            });
            player.current?.addEventListener('canplay', () => {
                player.current?.play();
            });
        })*/
    };
    return (
        <PlayerContext.Provider value={{
            playerRef: player,
            createPlayList,
            play,
            pause,
            stop,
            next,
            prev
        }}>
            {props.children}
        </PlayerContext.Provider>
    );
};
