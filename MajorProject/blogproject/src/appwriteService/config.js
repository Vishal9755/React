import conf from "../conf/conf";
import { Client,Account,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    database;
    storage;

    constructor(){
        this.client
        .setEndpoint(conf. appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.database=new Databases(this.client);
        this.storage=new Storage(this.client);

    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.database.createDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//or id.unique()
                {
                    title,
                    content,featuredImage,
                    status,
                    userId
                }

            )
        } catch (error) {
            console.log('appwrite error::createPost::',error);
            
            
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log('appwrite service:: updatePost::',error);
            
            
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
            
        } catch (error) {
            console.log('appwrite delete::',error);
            return false
            
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,slug
            )
            
        } catch (error) {
            console.log('appwrite get::',error);
            return false
            
            
        }
    }

    async getPosts(queries=[Query.equal("status","active")
    ]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log('appwrite  service getPosts::',error);
            
            
        }
    }

    //file upload service

    async uplodaFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {

            console.log('appwrite service :: uploadFile:;',error);
            
        }
    }

    async deletePost(fileId){
        try {
            await this.storage.deleteFile(
               conf.appwriteBucketId,
               fileId 
            )
            return true
        } catch (error) {
            console.log('appwrite service :: deleteFile:;',error);
            return false
            
        }
    }


    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }// this is fast returning that y in this we can not use promise or async function
}


const service=new Service()

export default service