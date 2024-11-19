const apiURI = 'http://localhost:8080/api';

const authContext = apiURI+'/auth';
const booksContext = apiURI+'/books';
const messageContext = apiURI+'/messages';
const settingsContext = apiURI+'/settings';
export const Endpoints = Object.freeze({
    GET:{
        DOES_USER_EXIST:[authContext,'userExists'].join('/'),
        VERIFY_EMAIL:[authContext,'verifyEmail'].join('/'),
        GET_BOOKS:[booksContext,'getAvailableBooks'].join('/'),  
        GET_MY_BOOKS:[booksContext,'getMyBooks'].join('/'),
        GET_USER_NAME:[authContext,'getUserName'].join('/'),
        GET_REQUESTED_BOOKS:[booksContext,'getRequestedBooks'].join('/'),
        GET_BOOK_REQUESTS:[booksContext,'getBookRequests'].join('/'),
        GET_ALL_TRANSACTIONS:[booksContext,'getAllTransactions'].join('/'),
        GET_SETTINGS:[settingsContext,'getPreferences'].join('/'),
        GET_BOOK_COUNTS:[booksContext,'getBookCounts'].join('/'),
        
    },
       
    POST:{
        UPDATE_PASSWORD:[authContext,'updatePassword'].join('/'),
        SIGN_UP_USER:[authContext,'addNewUser'].join('/'),
        ADD_NEW_BOOK:[booksContext,'addBook'].join('/'),
        SEND_MSG:[messageContext,'send'].join('/'),
        UPDATE_BOOK:[booksContext,'updateBook'].join('/'),
        DELETE_BOOK:[booksContext,'deleteMyBook'].join('/'),
        REQUEST_BOOK:[booksContext,'requestBook'].join('/'),
        UPDATE_REQUEST_STATUS:[booksContext,'updateRequestStatus'].join('/'),
        SAVE_SETTINGS:[settingsContext,'saveSettingPreferences'].join('/'),
    },
    DELETE:{

    },
    PUT:{

    }
})