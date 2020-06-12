import React, { useState } from 'react';
import InputFile from '../../src/Inputs/InputFile';

import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Simple File-Uploader',
  decorators: [withKnobs],
};

export const FileUploaderStory = () => {
  const [file, setFile] = useState(null);

  const imageUpload = boolean('Image', false);
  const setFileData = (fileData: any) => {
    setFile(fileData);
    console.log(fileData);
  };

  return imageUpload ? (
    <>
      <InputFile setFileData={setFileData} image>
        <span
          style={{
            backgroundColor: 'red',
            fontSize: '1.25em',
            fontWeight: 700,
            color: 'white',
            padding: 20,
            borderRadius: 4,
          }}
        >
          Upload an image
        </span>
      </InputFile>
      <img src={file} width={200} />
    </>
  ) : (
    <>
      <InputFile setFileData={setFileData}>
        <span
          style={{
            backgroundColor: 'red',
            fontSize: '1.25em',
            fontWeight: 700,
            color: 'white',
            display: 'inline-block',
            padding: 20,
            borderRadius: 4,
          }}
        >
          Upload a file
        </span>
      </InputFile>
      {file && file.size && (
        <>
          <div>filename : {file && file.name}</div>
          <div>fileSize: {file && `${file.size} octet`}</div>
          <div>fileType: {file && file.type}</div>
        </>
      )}
    </>
  );
};
