import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import files_manager_slice from '../features/files_manager/files_manager_slice'

export default configureStore({
    reducer: {
        filesManager: files_manager_slice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})