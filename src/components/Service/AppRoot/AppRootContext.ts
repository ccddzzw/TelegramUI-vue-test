import { InjectionKey, provide, inject, reactive, readonly, Ref, ref } from 'vue'

export interface AppRootState {
  platform: 'base' | 'ios';
  appearance: 'light' | 'dark';
  portalContainer: Ref<any>;
  isRendered: boolean;
}

const AppRootKey: InjectionKey<Readonly<AppRootState>> = Symbol('AppRoot')

export function provideAppRoot() {
  const state = reactive<AppRootState>({
    platform: 'base',
    appearance: 'light',
    portalContainer: ref(null),
    isRendered: true,
  })

  const setState = (newState: Partial<AppRootState>) => {
    Object.assign(state, newState)
  }

  provide(AppRootKey, readonly(state))

  return {
    state: readonly(state),
    setState,
  }
}

export function useAppRoot() {
  const state = inject(AppRootKey)
  if (!state) {
    throw new Error('useAppRoot must be used within an AppRoot component')
  }
  return state
}