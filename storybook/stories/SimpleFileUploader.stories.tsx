import React, { useState } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import InputFile from '../../src/Inputs/InputFile';
import Table from '../../src/Table/index';
import jssGlobals from '../../src/Theme/jssGlobals';

export default {
  title: 'Simple File-Uploader',
  decorators: [withKnobs],
};

export const FileUploaderStory = () => {
  const [file, setFile] = useState(null);

  const imageUpload = boolean('Image', false);
  const setFileData = (fileData: any) => {
    setFile(fileData);
  };

  return imageUpload ? (
    <>
      <InputFile setFileData={setFileData} image>
        <span
          style={{
            backgroundColor: jssGlobals.backgroundColor.darkTheme,
            fontSize: '1.25em',
            fontWeight: 700,
            color: jssGlobals.color.darkTheme,
            padding: 8,
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
            backgroundColor: jssGlobals.backgroundColor.darkTheme,
            fontSize: '1.25em',
            fontWeight: 700,
            color: jssGlobals.color.darkTheme,
            padding: 8,
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

const rows = [
  ['setFileData', 'function'],
  ['image', 'boolean'],
  ['src', 'fileData'],
];

const headers = ['PROPS', 'TYPE'];

export const fileUploaderStoryProps = () => (
  <>
    <Table rows={rows} headers={headers} align="left" theme="lightTheme" />
  </>
);
