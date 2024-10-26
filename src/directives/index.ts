import type { App } from 'vue'

import ripple from '@/directives/modules/ripple'
import slideIn from '@/directives/modules/slide-in'
import draggable from '@/directives/modules/draggable'

const directivesList: any = { ripple, slideIn, draggable }

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      app.directive(key, directivesList[key])
    })
  }
}

export default directives
