import { useEffect, useState } from "react"
import {
  Upload as BaseUpload,
  UploadFile,
  UploadProps as BaseUploadProps,
} from "antd"

import Button from "../button"
import { CloseIcon, DownloadIcon } from "../icons"
import Shimmer from "../shimmer"

type UploadProps = {
  title?: string
  placeholder?: string
  multiple?: boolean
  onChange?: (file: any) => void
  value?: any
  downloadable?: boolean
  loading?: boolean
} & Omit<BaseUploadProps, "onChange" | "fileList" | "customRequest">

const Upload = ({
  title = "Upload",
  placeholder = "Choose Image",
  multiple = false,
  loading = false,
  onChange,
  downloadable = false,
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

  const handleOnDownload = (file: any, e: any) => {
    e.stopPropagation()

    // anchor link
    const element = document.createElement("a")
    element.href = file.url
    element.download = file.name || new Date().toISOString()
    element.target = "_blank"
    // simulate link click
    document.body.appendChild(element) // Required for this to work in FireFox
    element.click()
  }

  useEffect(() => {
    if (!props.value) {
      setFileList([])
      return
    }

    if (props.value.length === 0) {
      setFileList([])
      return
    }

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
          {loading ? (
            <Shimmer className="mt-2" height={36} />
          ) : (
            <>
              {fileList.length > 0 ? (
                <div className="flex flex-col gap-2 w-full">
                  {fileList.map((file) => (
                    <div
                      key={file.uid}
                      className="flex items-center gap-4 w-full"
                    >
                      {downloadable && file.url && (
                        <button
                          type="button"
                          className="flex flex-col justify-center items-center bg-orange-100 border-0 h-[38px] w-[38px] rounded cursor-pointer"
                        >
                          <DownloadIcon
                            className="text-orange-300"
                            width={20}
                            height={20}
                            onClick={(e) => handleOnDownload(file, e)}
                          />
                        </button>
                      )}
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
                          htmlType="button"
                        >
                          <CloseIcon />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex space-between items-center gap-2 p-2 bg-neutral-100 rounded w-full">
                  <span>{placeholder}</span>
                </div>
              )}
            </>
          )}
        </div>
        <Button buttonVariant="primary" loading={loading}>
          {title}
        </Button>
      </div>
    </BaseUpload>
  )
}

export type { UploadFile, UploadProps }
export default Upload
