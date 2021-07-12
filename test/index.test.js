const {sequelize} = require("../src/db");

const { Artist, Album, Track } = require("../src/index.js");

////////////////

describe('Artist', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create artist', async() => {
        const testArtist = await Artist.create({name : 'BTS', year_debuted : '2013', genre : 'Pop'});
        const testArtist2 = await Artist.create({name : 'Weezer', year_debuted : '1992', genre : 'Rock'});
        expect(testArtist.name).toBe('BTS');
        expect(testArtist2.name).toBe('Weezer');
        expect(testArtist.id).toBe(1);
        expect(testArtist2.id).toBe(2);
	})

	test('can add year debuted', async () => {
		const testArtist = await Artist.create({name : 'BTS', year_debuted : '2013', genre : 'Pop'});
		expect(testArtist.year_debuted).toBe('2013');
		})
		
	test('artist has a genre', async() => {
		const testArtist = await Artist.create({name : 'Weezer', year_debuted : '1992', genre : 'Rock'});
		expect(testArtist.genre).toBe('Rock');
	})

	test('artist can have many albums', async () => {
		const BTS = await Artist.create({name : 'BTS', genre : 'Pop'})

		const darkWild = await Album.create({name : 'Dark & Wild', year_released : '2014'});
		const wings = await Album.create({name : 'Wings', year_released : '2016'});
		const persona = await Album.create({name : 'Map of the Soul: Persona', year_released : '2019'});

		await BTS.addAlbum(darkWild) //addAlbum is a 'magic method' we get from Sequelize, once we declare an association
		await BTS.addAlbum(wings)
		await BTS.addAlbum(persona)

		const Albums = await BTS.getAlbums() // another association 'magic method'

		expect(Albums.length).toBe(3)
		expect(Albums[0] instanceof Album).toBeTruthy

    })
////////////////
    describe('Album', () => {

        beforeAll(async () => {
            await sequelize.sync({force: true})
        })
    
        test('can create album title', async() => {
            const testAlbum = await Album.create({name : '2 COOL 4 SKOOL'});
            expect(testAlbum.name).toBe('2 COOL 4 SKOOL');
            expect(testAlbum.id).toBe(1);
        })
    
        test('can add year released', async () => {
            const testAlbum = await Album.create({name : '2 COOL 4 SKOOL', year_released : '2013'});
            expect(testAlbum.year_released).toBe('2013');
        })
    
        test('album can have many tracks', async () => {
            const wings = await Album.create({name : 'Wings', year_released: '2016'})
    
            const bloodSweatTears = await Track.create({name : 'Blood Sweat & Tears', from_album : 'Wings'});
            const twoThree = await Track.create({name : '2! 3!', from_album : 'Wings'});
            const lost = await Track.create({name : 'Lost', from_album : 'Wings'});
            const cypher4 = await Track.create({name : 'BTS Cypher 4', from_album : 'Wings'});
    
            await wings.addTrack(bloodSweatTears); //addAlbum is a 'magic method' we get from Sequelize, once we declare an association
            await wings.addTrack(twoThree);
            await wings.addTrack(lost);
            await wings.addTrack(cypher4);
    
            const Tracks = await wings.getTracks() // another association 'magic method'
    
            expect(Tracks.length).toBe(4)
            expect(Tracks[0] instanceof Album).toBeTruthy
    
        })
////////////////
        describe('Track', () => {

            beforeAll(async () => {
                await sequelize.sync({force: true})
            })
        
            test('can create track title', async() => {
                const testTrack = await Track.create({name : 'Black Swan', from_album: 'Map of the Soul: 7'})
                expect(testTrack.name).toBe('Black Swan')
                expect(testTrack.id).toBe(1)
            })
        
            test('can add album from', async () => {
                const testTrack = await Track.create({name : 'Black Swan', from_album : 'Map of the Soul: 7'});
                expect(testTrack.from_album).toBe('Map of the Soul: 7');
            })

        })
    })

})