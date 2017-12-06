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

    $onCreate() {
        this.getList();
    }

    getList() {
        const promises = [
            this.listService.getUsers(),
            this.listService.getPosts(),
            this.listService.getAlbums()
        ]

        Promise.all(promises).then(data => {
            const users = data[0];
            const posts = data[1];
            const albums = data[2];

            this.posts = posts.map((post: any) => {
                const value: any = {};
                
                value.post = post;
                value.user = users.find((user: any) => user.id === post.userId);
                value.album = albums.find((album: any) => album.id === post.id);
                value.showInput = false;
    
                return value;
            });
        });
    }
}