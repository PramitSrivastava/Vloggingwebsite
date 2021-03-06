import { Button, FormControl, MenuItem, TextField } from "@material-ui/core";
import { Formik } from "formik";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import app_config from "../config";
import Swal from "sweetalert2";
import { useState } from "react";
import '../stylesheets/addvlogs.css';

const AddVlog = () => {

    const url = app_config.api_url;
    const [thumb, setThumb] = useState("");
    const [videoFile, setVideoFile] = useState("");
    
    const videoform = {
        title: '',
        description: '',
        category: '',
        thumbnail: '',
        file: '',
        created: new Date()
    }

    const formSubmit = (values) => {
        console.log(values);
        values.thumbnail = thumb;
        values.file = videoFile;

        const reqOp = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }

        fetch(url + 'video/add', reqOp)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.message == 'success') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Video Added Successfully!!'
                    })
                }
            })
    }

    const uploadThumbnail = (event) => {
        const formdata = new FormData();
        formdata.append('file', event.target.files[0]);

        const reqOptions = {
            method: 'POST',
            body: formdata
        }

        fetch(url + 'util/addfile', reqOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setThumb(event.target.files[0].name)
            })

    }

    const uploadVideo = (event) => {
        const formdata = new FormData();
        formdata.append('file', event.target.files[0]);

        const reqOptions = {
            method: 'POST',
            body: formdata
        }

        fetch(url + 'util/addfile', reqOptions)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setVideoFile(event.target.files[0].name)
            })

    }



    return (
        <div className="vcx">
            <h1 className="fgh">Add your vlogs here </h1>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">

                            <h2>Add Vlogs</h2>
                            <hr />

                            <Formik
                                initialValues={videoform}
                                onSubmit={formSubmit}
                            >
                                {({
                                    values,
                                    handleChange,
                                    handleSubmit
                                }) => (
                                    <form onSubmit={handleSubmit}>

                                        <TextField className="w-100 mt-4" label="Title" variant="filled" id="title" onChange={handleChange} value={values.title}></TextField>
                                        <TextField multiline rows={5} className="w-100 mt-4" label="Description" variant="filled" id="description" onChange={handleChange} value={values.description}></TextField>
                                        <FormControl className="w-100 mt-4" variant="filled">
                                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                name="category"
                                                value={values.category}
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={''}>None</MenuItem>
                                                <MenuItem value={'Movie'}>Movie</MenuItem>
                                                <MenuItem value={'WebSeries'}>Web Series</MenuItem>
                                                <MenuItem value={'TVShows'}>TV Series</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <input onChange={uploadThumbnail} type="file" className="form-control mt-4" title="Select Thumbnail" />

                                        <input onChange={uploadVideo} type="file" className="form-control mt-4" title="Select Video File" />

                                        <Button className="w-100 mt-5" variant="contained" color="primary" type="submit">
                                            Submit
                                        </Button>
                                    </form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddVlog;