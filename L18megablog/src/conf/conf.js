const conf = {

    appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojectid : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedatabase: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollection: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwritebucket: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)


}



export default conf