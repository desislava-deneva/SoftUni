class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }
    register(username, password, repeatPassword, email) {

        if (!username || !password || !repeatPassword || !email) {
            throw new Error(`Input can not be empty`);
        }

        if (password != repeatPassword) {
            throw new Error(`Passwords do not match`)
        }

        let user = this._users.find(u => u.username == username);

        if (user || this._users.some(e => e.email == email)) {
            throw new Error("This user already exists!")
        }

        this._users.push({ username, password, email, flag: false });
        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        
        let user = this._users.find(u => u.username == username);
        let passwordAndUser = this._users.find(u => u.password == password && u.username === username);

        if (!user) {
            throw new Error("There is no such user");
        }

        if (passwordAndUser) {
            user.flag = true;
            return ("Hello! You have logged in successfully");
        }
    }

    logout(username, password) {
        let user = this._users.find(u => u.username == username);
        let passwordAndUser = this._users.find(u => u.password == password && u.username === username);

        if (!user) {
            throw new Error("There is no such user");
        }

        if (passwordAndUser) {
            user.flag = false;
            return ("You have logged out successfully");
        }
    }

    postQuestion(username, question) {
        let user = this._users.find(u => u.username == username);

        if (!user || user.flag == false) {
            throw new Error("You should be logged in to post questions");
        }

        if (!question) {
            throw new Error("Invalid question")
        }

        this._questions.push({ questionId: this._id, username, question });
        this._id++
        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId, answer) {

        if (!this._users.some(u => u.username == username) || this._users.find(u => u.username == username).flag == false) {
            throw new Eroro("You should be logged in to post answers");
        }

        if (!answer) {
            throw new Eror("Invalid answer")
        }

        if (!this._questions.some(q => q.questionId == questionId)) {
            throw new Eror("There is no such question");
        }

        let user = this._questions.find(q => q.questionId == questionId);
        if (!user.hasOwnProperty('answers')) {
            user.answers = [];
        }
        user.answers.push({ username, answer });
        return "Your answer has been posted successfully";
    }

    showQuestions() {
        let result = [];

        for (const questionIndex of Object.values(this._questions)) {
            result.push(`Question ${questionIndex.questionId} by ${questionIndex.username}: ${questionIndex.question}`);

            for (const answerIndex of Object.values(questionIndex.answers)) {
                 result.push(`---${answerIndex.username}: ${answerIndex.answer}`)
            }
        }

        return result.join('\n');
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
forum.postAnswer('Michael', 2, "Tell us how tall she is.");

console.log(forum.showQuestions());

