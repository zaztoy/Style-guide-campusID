import React, { useState } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import InputFile from '../../src/Inputs/InputFile';
import Table from '../../src/Table/index';
import jssGlobals from '../../src/Theme/jssGlobals';

export default {
  title: 'Simple File-Uploader',
  decorators: [withKnobs],
};

export const SimpleFileUploaderStory = () => {
  const [file, setFile] = useState(null);

  const isImage = boolean('isImage', false);

  const setFileData = (fileData: any) => {
    setFile(fileData);
  };

  return isImage ? (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <div>
        <InputFile setFileData={setFileData} isImage>
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
      </div>
      <div>
        <img src={file} width={200} />
      </div>
    </div>
  ) : (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <div>
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
      </div>
      {file && file.size && (
        <div>
          <div>filename : {file && file.name}</div>
          <div>fileSize: {file && `${file.size} octet`}</div>
          <div>fileType: {file && file.type}</div>
        </div>
      )}
    </div>
  );
};

const rows = [
  ['setFileData:', '(file: any) => void'],
  ['children:', 'ReactNode'],
  ['isImage:', 'boolean'],
];

const headers = ['PROPS', 'TYPE'];

export const SimpleFileUploaderProps = () => (
  <>
    <Table rows={rows} headers={headers} align="left" theme="lightTheme" />
  </>
);
