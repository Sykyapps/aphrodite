import { useEffect, useState } from "react"
import {
  Upload as BaseUpload,
  UploadFile,
  UploadProps as BaseUploadProps,
} from "antd"

import Button from "../button"
import { CloseIcon } from "../icons"

type UploadProps = {
  title?: string
  placeholder?: string
  multiple?: boolean
  onChange: (file: any) => void
  value?: any
} & Omit<BaseUploadProps, "onChange" | "fileList">

const Upload = ({
  title = "Upload",
  placeholder = "No file choosen",
  multiple = false,
  onChange,
  ...props
}: UploadProps) => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleOnRemove = (file: any) => {
    if (!multiple) {
      setFileList([])
      onChange && onChange([])
      return
    }

    const index = fileList.indexOf(file)
    const newFileList = fileList.slice()
    newFileList.splice(index, 1)
    setFileList(newFileList)
    onChange && onChange(newFileList)
  }

  const handleOnUpload = (e: any) => {
    const file = e.file

    if (multiple) {
      setFileList([...fileList, file])
      onChange && onChange([...fileList, file])
      return
    }

    setFileList([file])
    onChange && onChange([file])
  }

  useEffect(() => {
    if (!props.value) return
    if (fileList.length > 0) return

    setFileList(props.value)
  }, [props.value])

  return (
    <div className="flex flex-wrap gap-4 py-2">
      <div className="w-[307px]">
        {fileList.length > 0 ? (
          <div className="flex flex-col gap-2">
            {fileList.map((file) => (
              <div
                key={file.uid}
                className="flex justify-between items-center gap-2 p-2 bg-neutral-100 rounded w-full"
              >
                <a
                  href={file.url}
                  target="_blank"
                  className="text-active-text hover:text-purple-300 line-clamp-1"
                >
                  {file.name}
                </a>
                <Button
                  className="!h-auto text-lowEmphasis-iconPrimary"
                  buttonVariant="icon"
                  onClick={() => handleOnRemove(file)}
                >
                  <CloseIcon />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex space-between items-center gap-2 p-2 bg-neutral-100 rounded">
            <span className="text-[#989cac]">{placeholder}</span>
          </div>
        )}
      </div>
      <BaseUpload
        name={props.name}
        onChange={handleOnUpload}
        maxCount={props.maxCount ? props.maxCount : !multiple ? 1 : undefined}
        fileList={[]}
        {...props}
      >
        <Button buttonVariant="primary">{title}</Button>
      </BaseUpload>
    </div>
  )
}

export type { UploadFile, UploadProps }
export default Upload
