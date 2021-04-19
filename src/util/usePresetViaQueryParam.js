import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQueryParam, StringParam } from 'use-query-params';
import presetColville from '../actions/presetColville';
import presetColvilleClassic from '../actions/presetColvilleClassic';
import presetMercer from '../actions/presetMercer';
import presetMercerPlus from '../actions/presetMercerPlus';

const usePresetViaQueryParam = () => {
    const [preset, setPreset] = useQueryParam('preset', StringParam);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (preset === undefined) return;
        switch (preset?.toLowerCase?.()?.trim?.() ?? '') {
            case 'colville-classic': {
                dispatch(presetColvilleClassic());
                break;
            }
            case 'colville': {
                dispatch(presetColville());
                break;
            }
            case 'mercer': {
                dispatch(presetMercer());
                break;
            }
            case 'mercer-plus': {
                dispatch(presetMercerPlus());
                break;
            }
        }
        setPreset(undefined, 'replace');
    }, [preset, dispatch, setPreset]);
};

export default usePresetViaQueryParam;