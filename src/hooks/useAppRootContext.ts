import { useAppRoot } from "../components/Service/AppRoot/AppRootContext";

export const useAppRootContext = () => {
    const rootContext = useAppRoot();
  
    if (!rootContext.isRendered) {
      throw new Error('[TGUI] Wrap your app with <AppRoot> component');
    }
  
    return rootContext;
  };