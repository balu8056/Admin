import tableData from '../DummyData.json'
import history from '../createHistory'
const initialState = {

    tableData : tableData
}

function reducer(state=initialState, action){
    switch(action.type){
        case "DETELE_DATA": 
                
                    console.log("from red",action.payload)
                    console.log(state.tableData)
                    const newdata = state.tableData.filter(ite => ite.id !== action.payload);
                    console.log(newdata)
                    console.log(newdata.length)
                    history.push('/')
                        return {
                            ...state,
                            tableData : newdata
                        }
                
        
        case "INSERT_DATA" : 
                if(action.payload) {
                    state.tableData.push(action.payload)
                }
                break;
        
        default: return state
    }
}

export default reducer;