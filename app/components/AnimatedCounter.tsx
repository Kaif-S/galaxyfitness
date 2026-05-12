"use client"
import React, {useRef}from 'react'
import { animate, useInView, useIsomorphicLayoutEffect , type AnimationOptions } from 'framer-motion'

interface AnimateCounterProps{
    from:number,
    to:number,
    animationOptions?: AnimationOptions,
    tofixVal?: number
}

const AnimateCounter = ({from,to,animationOptions,tofixVal=0}:AnimateCounterProps) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const inView = useInView(ref)

    useIsomorphicLayoutEffect(()=>{{
        const element = ref.current;

        if(!element) return;
        if(!inView)return;

        element.textContent = String(from)

        const controls = animate(from,to,{
            ...animationOptions,
            onUpdate(value){
                element.textContent = value.toFixed(tofixVal);
            },
        });
        return () =>{controls.stop()}

    }},[from,to,ref,inView])
  return (
    <span ref={ref}/>
  )
}

export default AnimateCounter