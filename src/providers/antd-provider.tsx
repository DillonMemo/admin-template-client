import React from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'

export default function AntdProvider({ children }: React.PropsWithChildren) {
  return <AntdRegistry autoClear>{children}</AntdRegistry>
}
