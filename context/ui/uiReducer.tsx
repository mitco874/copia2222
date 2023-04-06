import { UIState } from '../';

type UIAction=
| { type: '[UI] - toggleMenu'}

export const UIReducer = ( state: UIState , action: UIAction ): UIState => {

     switch ( action.type ) {
          case '[UI] - toggleMenu':
                return { 
                    ...state, 
                    sidebarMenuOpen: !state.sidebarMenuOpen 
                };

          default:
               return state;
     }

}