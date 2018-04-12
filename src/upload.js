import React from "react";

const Upload = ({ url, handleChange }) => (
    <form action="{ url }" encType="multipart/form-data" method="post">
        <input type="file" name="file-upload" className="file-upload-input" multiple="" onChange={handleChange} />
    </form>
);

export default Upload;