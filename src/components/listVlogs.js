import { Card, Button, CardContent, CircularProgress, CardMedia } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import app_config from "../config";


const vlogDetail = props => {

    const url = app_config.api_url;

    return (
        <Card>
            <CardMedia image={url + props.vlogData.thumbnail} style={{ height: '18rem' }}>

            </CardMedia>
            <CardContent>
                <h3>{props.vlogData.title}</h3>
                <p className="text-muted">{props.vlogData.category}</p>
                <p className="">{props.vlogData.description}</p>

                <Button component={Link} to={'/viewVlog/' + props.vlogData._id} variant="contained" className="mt-2" color="primary">View More</Button>
            </CardContent>
        </Card>
    )
}


const Listvlogs = () => {

    const [vlogList, setvlogList] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = app_config.api_url;

    useEffect(() => {
        fetch(url + 'vlog/getall')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setvlogList(data);
                setLoading(false);
            })
    }, [])


    const showvlogList = () => {
        if (loading) {
            return <CircularProgress color="primary" />
        } else {
            return <div className="row">
                {
                    vlogList.map((vlog) => {
                        return (
                            <div className="col-md-3">
                                <vlogDetail vlogData={vlog} key={vlog._id}></vlogDetail>
                            </div>
                        )
                    })
                }
            </div>
        }

    }

    return (
        <div className="container-fluid">
            <h2 className="text-center mt-4">List of Added vlogs</h2>
            <hr />

            {showvlogList()}

        </div>
    )
}

export default Listvlogs;