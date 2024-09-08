import { AppRootState } from '../components/Service/AppRoot/AppRootContext';
import { useAppRootContext } from './useAppRootContext';


export const usePlatform = (): NonNullable<AppRootState['platform']> => {
  const rootContext = useAppRootContext()
  
  return rootContext.platform || 'base'
};

