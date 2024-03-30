import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsImage, BsFileEarmarkArrowUp } from 'react-icons/bs';
import { Button } from '@clab/design-system';

interface UploaderProps {
  label?: string;
  accept: string;
  maxFiles?: number;
  multiple?: boolean;
  onFileAccepted: (file: File | null) => void;
}

const Uploader = ({
  label,
  accept,
  maxFiles = 1,
  multiple = false,
  onFileAccepted,
}: UploaderProps) => {
  /**
   * 파일이 인식되었을 때 실행되는 콜백 함수입니다.
   */
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        onFileAccepted(file);
      }
    },
    [onFileAccepted],
  );
  /**
   * 파일 선택 취소 시 실행되는 콜백 함수입니다.
   */
  const onFileDialogCancel = useCallback(() => {
    onFileAccepted(null);
  }, [onFileAccepted]);

  /**
   * Dropzone 라이브러리를 위한 설정값입니다.
   */
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      onFileDialogCancel,
      maxFiles: maxFiles,
      multiple: multiple,
      accept: { [accept]: [] },
    });

  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 ml-1 text-xs">{label}</label>}
      <div
        className="flex items-center justify-center text-gray-600 border-2 border-dashed rounded-lg cursor-pointer min-h-56 bg-gray-50"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-sm text-center break-keep">
          {acceptedFiles.length ? (
            <ul className="leading-loose">
              {acceptedFiles.map((file, index) => (
                <li key={index}>
                  {file.name} - {file.size} bytes
                </li>
              ))}
              <li>
                총 {acceptedFiles.length}개의 파일이 첨부됐어요,&nbsp;
                <u>클릭하면 다시 업로드</u> 할 수 있어요.
              </li>
            </ul>
          ) : isDragActive ? (
            <>
              <BsFileEarmarkArrowUp size={46} />
              <p>파일이 인식됐어요, 지금 놓으시면 돼요!</p>
            </>
          ) : (
            <>
              <BsImage size={46} />
              <p>파일을 여기로 끌어다 놓아주세요.</p>
              <p>또는</p>
              <Button type="button">파일 선택하기</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Uploader;