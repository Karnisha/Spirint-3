import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Corrected import
import courseReducer from '../../reducer/Course/AddCourseReducer';
import addCourse from '../../middleware/Course/AddCourse';
import fetchcategoryApi from '../../middleware/Course/FetchCategoryMiddleware';
import fetchlevelApi from '../../middleware/Course/FetchLevelMiddleware';
import fetchCategoryReducer from '../../reducer/Course/FetchCategoryReducer';
import fetchLevelReducer from '../../reducer/Course/FetchLevelReducer';
import categoryReducer from '../../reducer/Course/AddCategoryReducer';
import addCategory from '../../middleware/Course/AddCategoryMiddleware';
import addTopicReducer from '../../reducer/Course/AddTopicReducer';
import addTopic from '../../middleware/Course/AddTopicMiddleware';
import fetchTopicsReducer from '../../reducer/Course/FetchTopicReducer';
import fetchTopicsApi from '../../middleware/Course/FetchTopicMiddleware';
import fetchEditTopicsApi from '../../middleware/Course/FetchEditTopicMiddleware';
import storage from 'redux-persist/lib/storage';
import { persistReducer,persistStore } from 'redux-persist';
import fetchEditTopicsReducer from '../../reducer/Course/FetchEditTopicsReducer';
import updateTopicReducer from '../../reducer/Course/UpdateTopicsReducer'
import updateTopicsApi from '../../middleware/Course/UpdateTopicsMiddleware';
import deleteTopicReducer from '../../reducer/Course/DeleteTopicsReducer';
import deleteTopic from '../../middleware/Course/DeleteTopicMiddleware';


const persistConfig={
  key:'root',
  storage,
  // blacklist:['fetchTopic']
};
 

const rootReducer = combineReducers({
  course: courseReducer, // The key you've used for your course reducer
  level:fetchLevelReducer,
  category:fetchCategoryReducer,
  addCategory:categoryReducer,
  Topic:addTopicReducer,
  fetchTopic:fetchTopicsReducer,
  fetchEditTopic:fetchEditTopicsReducer,
  updateTopic:updateTopicReducer,
   deleteTopic:deleteTopicReducer
  
});


const persistedReducer= persistReducer(persistConfig,rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, addCourse,addCategory,fetchcategoryApi,fetchlevelApi,addTopic,fetchTopicsApi,fetchEditTopicsApi,updateTopicsApi,deleteTopic) // Corrected middleware application
); 


export const persistor= persistStore(store);



