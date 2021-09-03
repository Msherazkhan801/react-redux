/* eslint-disable no-unused-vars */

declare module 'react-is' {
  import * as React from 'react'
  export function isContextConsumer(value: any): value is React.ReactElement
  export function isValidElementType(value: any): value is React.ElementType
}

/* eslint-disable import/no-unresolved */
import {} from 'react/next'

import {} from 'react-dom/next'
