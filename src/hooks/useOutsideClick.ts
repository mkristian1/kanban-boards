import { useEffect } from "react"


const useOutsideClick = (active: boolean, handle : (status: boolean) => void, ref: any) => {
    useEffect(() => {
        const listenOutsideClick = (event: Event) => {
          if (
            (active &&
              ref.current &&
              !ref.current.contains(event.target))
          ) {
            handle(false)
          }
        }
    
        document.body.addEventListener("mousedown", listenOutsideClick)
    
        return () => {
          document.body.removeEventListener("mousedown", listenOutsideClick)
        }
      }, [active])
}

export {
    useOutsideClick
}