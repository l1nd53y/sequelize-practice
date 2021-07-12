const {sequelize} = require("../src/db");

const {Track} = require("../src/track")

describe('Track', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create track title', async() => {
		const testTrack = await Track.create({name : 'Black Swan'})
		expect(testTrack.name).toBe('Black Swan')
		expect(testTrack.id).toBe(1)
	})

	test('can add album from', async () => {
		const testTrack = await Track.create({name : 'Black Swan', from_album : 'Map of the Soul: 7'});
		expect(testTrack.from_album).toBe('Map of the Soul: 7');
	})

})