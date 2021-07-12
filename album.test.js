  
const {sequelize} = require("./db");

const {Album} = require("./album")

describe('Album', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create album title', async() => {
		const testAlbum = await Album.create({name : '2 COOL 4 SKOOL'})
		expect(testAlbum.name).toBe('2 COOL 4 SKOOL')
		expect(testAlbum.id).toBe(1)
	})

	test('can add year released', async () => {
		const testAlbum = await Album.create({name : '2 COOL 4 SKOOL', year_released : "2013"});
		expect(testAlbum.year_released).toBe('2013');
	})

})