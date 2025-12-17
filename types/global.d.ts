interface Window {
  googleTranslateElementInit?: () => void
  google?: {
    translate?: {
      TranslateElement: {
        new (options: any, element: string): any
        InlineLayout: {
          HORIZONTAL: number
          SIMPLE: number
          VERTICAL: number
        }
      }
    }
  }
}
