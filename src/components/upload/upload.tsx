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
  onChange?: (file: any) => void
  value?: any
} & Omit<BaseUploadProps, "onChange" | "fileList" | "customRequest">

const Upload = ({
  title = "Upload",
  placeholder = "Choose Image",
  multiple = false,
  onChange,
  ...props
}: UploadProps) => {
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleOnRemove = (file: any, e: any) => {
    e.stopPropagation()

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
    <BaseUpload
      name={props.name}
      onChange={handleOnUpload}
      maxCount={props.maxCount ? props.maxCount : !multiple ? 1 : undefined}
      fileList={[]}
      customRequest={() => {}}
      {...props}
    >
      <div className="flex flex-wrap gap-4 pt-2">
        <div className="w-[307px] cursor-pointer">
          {fileList.length > 0 ? (
            <div className="flex flex-col gap-2">
              {fileList.map((file) => (
                <div
                  key={file.uid}
                  className="flex justify-between items-center gap-2 p-2 bg-neutral-100 rounded w-full"
                >
                  <span className="text-active-text hover:text-purple-300 line-clamp-1">
                    {file.name}
                  </span>
                  <Button
                    className="!h-auto text-lowEmphasis-iconPrimary"
                    buttonVariant="icon"
                    onClick={(e) => handleOnRemove(file, e)}
                  >
                    <CloseIcon />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex space-between items-center gap-2 p-2 bg-neutral-100 rounded">
              <span>{placeholder}</span>
            </div>
          )}
        </div>
        <Button buttonVariant="primary">{title}</Button>
      </div>
    </BaseUpload>
  )
}

export type { UploadFile, UploadProps }
export default Upload
