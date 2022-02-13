class Story {
    constructor(title, creator) {
        this.title = title
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }

     like(username) {
        let person = this._likes.find((c) => c == username);

        if (this.creator == username) {
            throw new Error("You can't like your own story!");
        }
        if (person) {
            throw new Error("You can't like the same story twice!");
        }

        this._likes.push(username);

        let messege = `${username} liked ${this.title}!`;
        return messege;
    }

    dislike(username) {
        let likeUsername = this._likes.find(u => u === username);

        if (!likeUsername) {
            throw new Error(`You can't dislike this story!`)
        }

        let index = this._likes.findIndex(u => u === username);
        this._likes.splice(index, 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {

        let commentId = this._comments.find(x => x.id == id);

        if (!id || !commentId) {
            this._comments.push({
                id: this._comments.length + 1,
                username,
                content,
                replies: []
            });

            return `${username} commented on ${this.title}`
        }


        commentId.replies.push({
            id: `${id}.${commentId.replies.length + 1}`,
            username,
            content
        });

        return `You replied successfully`;
    }

    toString(sortingType) {

        let sorting = {
            asc: () => (a, b) => a.id - b.id,
            desc: () => (a, b) => b.id - a.id,
            username: () => (a, b) => a.username.localeCompare(b.username)
        }

        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push(`Comments:`);

        let sortedComents = this._comments.sort(sorting[sortingType]());

        sortedComents.forEach(c => {
            result.push(`-- ${c.id}. ${c.username}: ${c.content}`)

            let sortedReplies = c.replies.sort(sorting[sortingType]());

            sortedReplies.forEach(r => {
                result.push(`--- ${r.id}. ${r.username}: ${r.content}`)
            })
        });


        return result.join('\n').trim();
    }
}

//Unexpected error: expected undefined to equal 'Title: My Story\nCreator: Anny\nLikes: 0\nComments:\n-- 2. Ammy: New Content\n-- 3. Jessy: Nice :)\n-- 1. Sammy: Some Content\n--- 1.2. SAmmy: Reply@\n--- 1.1. Zane: Reply'


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));









