import { ref, watch, onUnmounted } from 'vue'
import { getTelegramData } from '../../../../helpers/telegram'
import { useAppRoot, AppRootState } from '../../../Service/AppRoot/AppRootContext'

function getBrowserAppearanceSubscriber(setAppearance: (appearance: AppRootState['appearance']) => void) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (event: MediaQueryListEvent) => {
        setAppearance(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    setAppearance(mediaQuery.matches ? 'dark' : 'light')

    return () => mediaQuery.removeEventListener('change', handleChange)
}

function getInitialAppearance(): AppRootState['appearance'] {
    const telegramData = getTelegramData()
    if (telegramData) {
        return telegramData.colorScheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useAppearance(appearanceProp?: AppRootState['appearance']): NonNullable<AppRootState['appearance']> {
    if (appearanceProp != undefined) {
        return appearanceProp
    }
    const appRootState = useAppRoot() as AppRootState // Remove Readonly
    const appearance = ref<AppRootState['appearance']>(appearanceProp || appRootState.appearance || getInitialAppearance())

    const handleThemeChange = () => {
        const telegramData = getTelegramData()
        if (telegramData) {
            appearance.value = telegramData.colorScheme
        }
    }

    watch(() => appearanceProp, (newAppearance) => {
        if (newAppearance !== undefined) {
            appearance.value = newAppearance
        }
    })

    watch(appearance, (newAppearance) => {
        if (appRootState.appearance !== newAppearance) {
            appRootState.appearance = newAppearance
        }
    })

    if (appearanceProp === undefined) {
        const telegramData = getTelegramData()
        if (telegramData) {
            telegramData.onEvent('themeChanged', handleThemeChange)
            onUnmounted(() => telegramData.offEvent('themeChanged', handleThemeChange))
        } else {
            const unsubscribe = getBrowserAppearanceSubscriber((newAppearance) => {
                appearance.value = newAppearance
            })
            onUnmounted(unsubscribe)
        }
    }

    return appearance
}