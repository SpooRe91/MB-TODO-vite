import { useMemo, } from 'react';
import { deviceDetect } from 'react-device-detect';

const mobileThreshold = 768;
const useGetAgentView = () => {

    const isMobile = useMemo(() => {
        const { isMobile } = deviceDetect(navigator.userAgent);
        if (isMobile && window.innerWidth < mobileThreshold) {
            return true;
        }
        return false;
    }, [window.innerWidth]);

    return { isMobile };
}

export default useGetAgentView;