const request = require('supertest');
const app= require ('./index');
const Post = require('./models/Post');

describe('testing/posts', () => {
    const posts = {
        title: 'Test Post', 
        body: 'This is a test post.'
    };
    test('create a post', async () => {
        let postCount = await Post.countDocuments({});
        expect(postCount).toBe(0);
        resPost = await request(app).post('/create').send(posts).expect(201);
        postCount = await Post.countDocuments({});
        expect(postCount).toBe(1)
    });
    afterAll(() => {
        return  Post.deleteMany();
    });
})


