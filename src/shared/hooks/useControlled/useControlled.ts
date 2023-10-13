import { useRef, useState } from "react";

export function useControlled<T>(config?: { controlled?: T; defaultValue?: T}): [T, React.Dispatch<React.SetStateAction<NonNullable<T>>>] {
    const { controlled, defaultValue } = config ?? {};
    const [ state, setState ] = useState(defaultValue!);

    const { current: isControlled } = useRef(typeof controlled !== 'undefined');
    
    const value = isControlled ? controlled : state;

    const setValueIfControlled: React.Dispatch<React.SetStateAction<NonNullable<T>>> = (mooValue) => {
        if (!controlled) {
            setState(mooValue);
        }
    };

    // TODO: add overloads for better handling on undefined
    return [value!, setValueIfControlled];
}
