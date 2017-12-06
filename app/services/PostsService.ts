import { m } from 'pyrite';

export class PostsService {

    public getUsers(): Promise<any> {
        return m.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users"
        }).then(users => users);
    }

    public async getPosts(): Promise<any> {
        const posts = await m.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts"
        });
    
        return posts
    }

    public async getAlbums(): Promise<any> {
        const albums = await m.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/albums"
        });

        return albums;
    }
}