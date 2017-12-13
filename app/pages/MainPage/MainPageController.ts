import { Component, Template, m } from "pyrite";
import { PostsService } from "../../services";
import { MainPageTemplate } from "./MainPageTemplate";


export interface Post {
    post: any;
    album: any;
    user: any;
    showInput: boolean;
}

@Template(MainPageTemplate)
export class MainPageController extends Component<any>{
    listService = new PostsService();
    posts: Array<Post> = [];
    
    $onInit() {
        return this.getList();
    }

    async getList() {
        const users = await this.listService.getUsers();
        const posts = await this.listService.getPosts();
        const albums = await this.listService.getAlbums();

        this.posts = posts.map((post: any) => {
            const value: any = {};
            
            value.post = post;
            value.user = users.find((user: any) => user.id === post.userId);
            value.album = albums.find((album: any) => album.id === post.id);
            value.showInput = false;

            return value;
        });

        return this.posts;
    }
}