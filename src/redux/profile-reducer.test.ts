import {addPostAC, deletePost, ProfilePagePropsType, profileReducer} from "./profile-reducer";

const state: ProfilePagePropsType = {
	posts: [
		{id: 1, message: 'Hello!', likesCount: 2},
		{id: 2, message: 'How are you?', likesCount: 17},
	],
	profile: {
		"userId": 0,
		"lookingForAJob": false,
		"lookingForAJobDescription": '',
		"aboutMe": '',
		"fullName": '',
		"contacts": {
			"github": '',
			"vk": '',
			"facebook": '',
			"instagram":'',
			"twitter": '',
			"website": '',
			"youtube": '',
			"mainLink": '',
		},
		"photos": {
			"small": '',
			"large": ''
		}
	},
	status: '',
	isEditMode: false
}

test('length of posts should be incremented', () => {
	//test data
	const action = addPostAC('samurai')

	//action
	const newState = profileReducer(state, action)

	//expectation
	expect(newState.posts.length).toBe(3)
})
test('name of new post should be added', () => {
	const action = addPostAC('samurai')
	const newState = profileReducer(state, action)

	expect(newState.posts[2].message).toBe('samurai')

})
test("names of posts shouldn't be change", () => {
	const action = addPostAC('samurai')

	const newState = profileReducer(state, action)

	expect(newState.posts[0].message).toBe('Hello!')
})

test('after deleting length of posts should be decrement', () => {
	const action = deletePost(1)
	const newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(1)
})

test("after deleting length of posts shouldn't be decrement", () => {
	const action = deletePost(45)
	const newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(2)
})