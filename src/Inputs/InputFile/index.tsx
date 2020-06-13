import React from 'react';

import styles from './style';

type Props = {
  children: React.ReactNode;
  setFileData: (fileDataURL: any) => void;
  isImage?: boolean;
};

const InputFile = ({ children, setFileData, isImage }: Props) => {
  const classes = styles();

  const readFile = (file: Blob): Promise<string> => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader?.result?.toString()), false);
      reader.readAsDataURL(file);
    });
  };

  const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<any> => {
    if (e.target.files && e.target.files.length > 0) {
      const file: File = e.target.files[0];

      const fileDataURL = await readFile(file);
      setFileData(fileDataURL);
    }
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<any> => {
    if (e.target.files && e.target.files.length > 0) {
      const file: File = e.target.files[0];
      setFileData(file);
    }
  };

  return (
    <label htmlFor="avatar-file" className={classes.label}>
      {children}
      <input
        id="avatar-file"
        accept={isImage ? 'image/png, image/jpeg, image/jpg' : ''}
        data-testid="avatar-input-file"
        name="avatar"
        type="file"
        className={classes.hiddenInputFile}
        onChange={isImage ? onImageChange : onFileChange}
        onClick={e => {
          // Reset the value for every click, so we always have a change
          e.currentTarget.value = '';
        }}
      />
    </label>
  );
};

export default InputFile;
