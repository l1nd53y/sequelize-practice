const {sequelize} = require("./db");

const {Artist} = require("./artist")

describe('Artist', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create artist', async() => {
        const testArtist = await Artist.create({name : 'BTS'})
        const testArtist2 = await Artist.create({name : 'Weezer'})
        expect(testArtist.name).toBe('BTS')
        expect(testArtist2.name).toBe('Weezer')
        expect(testArtist.id).toBe(1)
        expect(testArtist2.id).toBe(2)
	})

	test('can add year debuted', async () => {
		const testArtist = await Artist.create({name : 'BTS', year_debuted : "2013"});
		expect(testArtist.year_debuted).toBe('2013');
    })
    

})