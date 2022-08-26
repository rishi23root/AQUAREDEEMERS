import React from 'react';
import "../Style/componets/imageUpload.css";



class ImageUpload extends React.Component {
    state = {
        files: [],
        imagesPreviewUrls: []
    };

    _handleImageChange = e => {
        e.preventDefault();

        // FileList to Array
        let files = Array.from(e.target.files);

        // File Reader for Each file and and update state arrays
        files.forEach((file, i) => {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState(prevState => ({
                    files: [...prevState.files, file],
                    imagesPreviewUrls: [...prevState.imagesPreviewUrls, reader.result]
                }));
            }

            reader.readAsDataURL(file);
        });
    }

    render() {
        let { imagesPreviewUrls } = this.state;

        return (
            <div id="">
                <label className="btn btn-default btn-lg z-depth-0 mr-0 pl-2 pr-2 custom-file-upload waves-effect waves-light" htmlFor="file">
                    <i className="fas fa-image fa-fw" aria-hidden="true"></i>
                    <input type="file" onChange={this._handleImageChange} multiple />
                </label>
                {imagesPreviewUrls.map(function (imagePreviewUrl, i) {
                    return <img key={i} src={imagePreviewUrl} className="image-pre" />
                })}
            </div>
        )
    }
}


export default ImageUpload;