'use client'

import { Provider } from 'react-redux'
import { reduxStore } from '@/lib/reduxStore/reduxStore'

export function HomeProviders({ children }: { children: React.ReactNode }) {
  return <Provider store={reduxStore}>{children}</Provider>
}