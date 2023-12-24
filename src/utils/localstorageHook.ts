import { useEffect, useState } from "react";

export function useLocaleStorage(key: string, action: string, value?: string) {

    const [ lsVal, setLsVal ] = useState<string | null>('')

     useEffect(() => {
       if(action === 'get') {
          setLsVal(localStorage.getItem(key))
       } else if(action === 'set' && value) {
          localStorage.setItem(key, value)
       }
     }, [])

     return lsVal
} 