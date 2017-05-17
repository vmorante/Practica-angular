import { Category } from "./category";
import { User } from "./user";
import { Like } from './like';

export class Post {
    
    private constructor(
        public id: number,
        public title: string,
        public intro: string,
        public body: string,
        public media: string,
        public publicationDate: number,
        public categories: Category[],
        public author: User,
        public likes: number,
        public likesUser: number[],
    ) { }

    static fromJson(json: any): Post {
        return new Post(
            json.id,
            json.title,
            json.intro,
            json.body,
            json.media,
            json.publicationDate,
            json.categories,
            json.author,
            json.likes,
            json.likesUser
        );
    }

    static fromJsonToList(json: any): Post[] {
        return (json as any[]).reduce((posts: Post[], post: Post) => {
            posts.push(Post.fromJson(post));
            return posts;
        }, []);
    }
}
