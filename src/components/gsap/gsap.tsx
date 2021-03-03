import React, {useRef, useEffect, cloneElement, ReactElement, useCallback} from 'react';
import {TweenLite, TweenMax, TimelineLite, Power3} from 'gsap';

interface Tween {
    duration: number,
    method: string,
    vars: gsap.TweenVars
    delay?: number
}

interface ParentProps {
    tweens: Array<Tween>,
    children: ReactElement<any>
}


export const Gsap = ({children, tweens}: ParentProps) => {
    let container = useRef();

    useEffect(() => {
        if(container)
        { 
            var t1 = new TimelineLite()
            tweens.map(t => {
                switch(t.method) {
                    case "from":
                        t1.from(container, t.duration, t.vars, t.delay ?? 0)
                        break
                    case "to":
                        t1.to(container, t.duration, t.vars, t.delay ?? 0)
                        break
                }
            })
        }
    });

    return (
        <div>
            {cloneElement(children, {
                ref: ref => container = ref
            })}
        </div>
    )
}