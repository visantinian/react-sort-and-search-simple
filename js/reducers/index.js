import * as types from '../constants/ActionTypes';
import { INITIAL_STATE } from '../constants/InitialState';

export default function searchlist(state = INITIAL_STATE, action) {


  switch (action.type) {

    case types.ADD_FILTER:
      const filterType = action.filter.type;
      const filterFunc = (a, b) => {
        if(state.isDesc) {
          if(a.get(filterType) < b.get(filterType)) return -1;
          if(a.get(filterType) > b.get(filterType)) return 1;
        } else {
          if(a.get(filterType) > b.get(filterType)) return -1;
          if(a.get(filterType) < b.get(filterType)) return 1;
        }
        return 0;
      };
      const sortedData = state.filteredData.sort(filterFunc);

      return {
        ...state,
        filteredData: sortedData,
        isDesc: !state.isDesc,
        activeUser: sortedData.get(0)
      }


      case types.SEARCH_NAME:
      const filterName = n => n.get('name').toLowerCase().includes(action.text.toLowerCase());
      const filteredDataByName = state.data.filter(filterName);
      return {
        ...state,
        filteredDataByName,
        activeUser: filteredDataByName.get(0)
      }
      case types.SEARCH_CITY:
      const filterCity = y => y.get('city').toLowerCase().includes(action.text.toLowerCase());
      const filteredDataByCity = state.data.filter(filterCity);
      return {
        ...state,
        filteredDataByCity,
        activeUser: filteredDataByCity.get(0)
      }

      case types.SEARCH_BIRTHYEAR:
      const filterBirthYear = b => b.get('birthYear').toLowerCase().includes(action.text.toLowerCase());
      const filteredDataByBirthYear = state.data.filter(filterBirthYear);
      return {
        ...state,
        filteredDataByBirthYear,
        activeUser: filteredDataByBirthYear.get(0)
      }

    case types.CHANGE_ACTIVE:
      return {
        ...state,
        activeUser: state.data.get(action.id)
      }

    case types.RECEIVE_USERS:
      return {
        ...state,
        filteredData: action.data,
        data: action.data,
        activeUser: action.data.get(0),
        isFetching: false
      }

    default:
      return state;
  }
}
