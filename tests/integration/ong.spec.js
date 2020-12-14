const request = require('supertest'); //importando a biblioteca.
const app = require('../../src/app');
const connection = require('../../src/database/connection');
const connectio = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {

       await connection.migrate.rollback;
       await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });
    
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD3",
	        email: "contato@contato.com",
	        whatsapp: "6199900990",
	        city: "Brasilia",
	        uf: "DF" 
        });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});