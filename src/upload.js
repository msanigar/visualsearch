import React from "react";
import Arrow from './arrow.svg';

const Upload = ({ url, handleChange }) => (
    <form action="{ url }" encType="multipart/form-data" method="post" id="upload-form">
        <label className="file-upload" htmlFor="file-upload"><Arrow fill="pink" /></label>
        <input type="file" id="file-upload" name="file-upload" className="file-upload-input" multiple="" onChange={handleChange} />
    </form>
);

export default Upload;