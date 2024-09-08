import { inject, InjectionKey } from 'vue'
import { AppRootState } from '../AppRootContext'

const AppRootContextKey: InjectionKey<AppRootState> = Symbol('AppRootContext')

export function usePlatform(platformProp?: AppRootState['platform']): NonNullable<AppRootState['platform']> {
  if (platformProp != undefined) {
    return platformProp
  }

  const context = inject(AppRootContextKey)
  if (!context) {
    throw new Error('usePlatform must be used within an AppRoot component')
  }

  return context.platform || 'base'
}