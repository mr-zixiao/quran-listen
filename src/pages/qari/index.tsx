import {useNavigate, useParams} from "react-router";
import {getQariList} from "@/services/qari";
import {useEffect, useState} from "react";
import {QariVo} from "@/services/qari/type.ts";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import {usePlayer} from "@/player";
import {getChapters} from "@/services/chapter";
import {useTranslation} from "@/lang";
import {makeZero} from "@/utils";

export default function Qari() {
    const player = usePlayer()
    const params = useParams()
    const navigate = useNavigate()
    const [list, setList] = useState<QariVo[]>([]);
    const [loading, setLoading] = useState(false);
    const {lang} = useTranslation()
    const getList = async () => {
        setLoading(true)
        const res = await getQariList()
        setList(res)
        setLoading(false)
    }
    useEffect(() => {
        getList().then(undefined)
    }, []);
    if (loading) {
        return <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4}}>
            <CircularProgress/>
        </Box>
    }
    return (<List>
        {list.map(item => <ListItem key={item.qariId} onClick={() => {
            if (params && params.chapterId) {
                getChapters().then(res => {
                    player?.createPlayList(res.map(v => {
                        return {
                            title: v[lang].title,
                            src: item.path.replace('*ID*', makeZero(v.chapterId)),
                            cover: 'https://www.zixiaocloud.online:3001/uploads/logo/logo.png'
                        }
                    }))
                })
                navigate('/play')
                return;
            }
            navigate(`/chapter/${item.qariId}`)
        }}>
            <ListItemAvatar>
                {/*<Avatar src={item.avatar}></Avatar>*/}
                <Avatar>{item.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name}
            />
        </ListItem>)}

    </List>)
}